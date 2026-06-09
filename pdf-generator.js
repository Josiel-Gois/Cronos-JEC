function getImageDimensions(dataUrl) {
    return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => {
            resolve({ width: img.naturalWidth, height: img.naturalHeight });
        };
        img.onerror = () => {
            resolve({ width: 800, height: 600 });
        };
        img.src = dataUrl;
    });
}

async function drawHeaderOnPDFPage(mergedPdf, page, title) {
    const { StandardFonts, rgb } = window.PDFLib;
    const fontBold = await mergedPdf.embedFont(StandardFonts.TimesRomanBold);
    const fontNormal = await mergedPdf.embedFont(StandardFonts.TimesRoman);
    const { width, height } = page.getSize();
    const headerHeight = 90;
    
    page.drawRectangle({
        x: 0,
        y: height - headerHeight,
        width: width,
        height: headerHeight,
        color: rgb(1, 1, 1)
    });
    
    page.drawLine({
        start: { x: 20, y: height - headerHeight + 5 },
        end: { x: width - 20, y: height - headerHeight + 5 },
        thickness: 0.5,
        color: rgb(0, 0, 0)
    });
    
    const drawCenteredText = (text, yOffset, size, font) => {
        const textWidth = font.widthOfTextAtSize(text, size);
        const x = (width - textWidth) / 2;
        page.drawText(text, {
            x: x,
            y: height - yOffset,
            size: size,
            font: font,
            color: rgb(0, 0, 0)
        });
    };
    
    drawCenteredText("PODER JUDICIÁRIO DE SANTA CATARINA", 20, 11, fontBold);
    drawCenteredText("Comarca de Itapoá - 1ª Vara Judicial", 32, 10, fontBold);
    drawCenteredText("Rua Mariana Michels Borges, 776 - Bairro: Itapema do Norte - CEP: 89249-000", 44, 8, fontNormal);
    drawCenteredText("Fone: (47) 3130-8408 • Email: itapoa.vara1@tjsc.jus.br", 54, 8, fontNormal);
    
    drawCenteredText("DOCUMENTO ANEXO", 68, 12, fontBold);
    drawCenteredText(title.toUpperCase(), 80, 10, fontBold);
}

async function forcePageToA4Portrait(mergedPdf, sourcePage, hasHeader = false) {
    const { degrees } = window.PDFLib;
    
    // A4 Retrato em pontos (210 x 297 mm)
    const a4W = 595.27;
    const a4H = 841.89;
    const headerHeight = hasHeader ? 95 : 0;
    
    // Criar nova página A4 Retrato no mergedPdf
    const newPage = mergedPdf.addPage([a4W, a4H]);
    
    // Incorporar a página
    const embeddedPage = await mergedPdf.embedPage(sourcePage);
    const { width: srcW, height: srcH } = sourcePage.getSize();
    const originalRotation = sourcePage.getRotation().angle || 0;
    
    // Determinar se é paisagem visualmente
    const isLandscape = (originalRotation === 90 || originalRotation === 270)
        ? srcW < srcH
        : srcW > srcH;
        
    let finalW, finalH;
    let drawW = srcW;
    let drawH = srcH;
    let extraRotation = 0;
    
    if (isLandscape) {
        extraRotation = 90;
        drawW = srcH;
        drawH = srcW;
    }
    
    // Espaço disponível para o conteúdo (descontando cabeçalho se houver)
    const availW = a4W;
    const availH = a4H - headerHeight;
    
    // Escala proporcional
    const scale = Math.min(availW / drawW, availH / drawH);
    finalW = drawW * scale;
    finalH = drawH * scale;
    
    // Centralização dentro da área disponível
    const xOffset = (availW - finalW) / 2;
    const yOffset = (availH - finalH) / 2;
    
    // Rotação total
    const totalRotation = (originalRotation + extraRotation) % 360;
    
    // Ajuste do ponto de inserção com base na rotação total aplicada
    let drawX = xOffset;
    let drawY = yOffset;
    
    if (totalRotation === 90) {
        drawX = xOffset + finalW;
        drawY = yOffset;
    } else if (totalRotation === 180) {
        drawX = xOffset + finalW;
        drawY = yOffset + finalH;
    } else if (totalRotation === 270) {
        drawX = xOffset;
        drawY = yOffset + finalH;
    }
    
    newPage.drawPage(embeddedPage, {
        x: drawX,
        y: drawY,
        width: srcW * scale,
        height: srcH * scale,
        rotation: degrees(totalRotation)
    });
    
    return newPage;
}

async function generatePDFProgrammatically(rawData) {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });
    let y = 20;

    function addText(text, size = 11, style = "normal", align = "left", spacing = 5) {
        doc.setFont("Times", style);
        doc.setFontSize(size);
        
        if (y > 270) {
            doc.addPage();
            y = 20;
        }
        
        const lines = doc.splitTextToSize(text, 170);
        lines.forEach(line => {
            if (y > 270) {
                doc.addPage();
                y = 20;
            }
            let x = 20;
            if (align === "center") {
                x = 105;
            } else if (align === "right") {
                x = 190;
            }
            doc.text(line, x, y, { align: align });
            y += spacing;
        });
    }

    // --- PÁGINA 1: PETIÇÃO INICIAL ---
    addText("PODER JUDICIÁRIO DE SANTA CATARINA", 12, "bold", "center", 6);
    addText("Comarca de Itapoá - 1ª Vara Judicial", 11, "bold", "center", 5);
    addText("Rua Mariana Michels Borges, 776 - Bairro: Itapema do Norte - CEP: 89249-000", 9, "normal", "center", 4);
    addText("Fone: (47) 3130-8408 • Email: itapoa.vara1@tjsc.jus.br", 9, "normal", "center", 6);
    
    y += 2;
    doc.line(20, y, 190, y);
    y += 8;
    
    addText("JUIZADO ESPECIAL CÍVEL", 13, "bold", "center", 10);
    
    addText("Ação: Procedimento do Juizado Especial Cível/PROC", 11, "bold", "left", 6);
    if (rawData.hasAnticipation) {
        addText("Pedido de antecipação de tutela: Sim", 11, "bold", "left", 8);
    } else {
        addText("Pedido de antecipação de tutela: Não", 11, "normal", "left", 8);
    }
    
    addText("Reclamante(s):", 12, "bold", "left", 6);
    addText(`Nome: ${rawData.req1.name.toUpperCase()}`, 11, "normal", "left", 5);
    addText(`Endereço: R: ${rawData.req1.street.toUpperCase()} N: ${rawData.req1.number} ${rawData.req1.city.toUpperCase()}/${rawData.req1.state.toUpperCase()} CEP: ${rawData.req1.postalCode}`, 11, "normal", "left", 5);
    addText(`CPF/CNPJ: ${rawData.req1.document}`, 11, "normal", "left", 5);
    addText(`Email: ${rawData.req1.email}`, 11, "normal", "left", 5);
    addText(`Telefone/Whatsapp: ${rawData.req1.phone}`, 11, "normal", "left", 8);
    
    if (rawData.req2) {
        addText(`Nome: ${rawData.req2.name.toUpperCase()}`, 11, "normal", "left", 5);
        addText(`Endereço: R: ${rawData.req2.street.toUpperCase()} N: ${rawData.req2.number} ${rawData.req2.city.toUpperCase()}/${rawData.req2.state.toUpperCase()} CEP: ${rawData.req2.postalCode}`, 11, "normal", "left", 5);
        addText(`CPF/CNPJ: ${rawData.req2.document}`, 11, "normal", "left", 5);
        addText(`Email: ${rawData.req2.email}`, 11, "normal", "left", 5);
        addText(`Telefone/Whatsapp: ${rawData.req2.phone}`, 11, "normal", "left", 8);
    }
    if (rawData.req3) {
        addText(`Nome: ${rawData.req3.name.toUpperCase()}`, 11, "normal", "left", 5);
        addText(`Endereço: R: ${rawData.req3.street.toUpperCase()} N: ${rawData.req3.number} ${rawData.req3.city.toUpperCase()}/${rawData.req3.state.toUpperCase()} CEP: ${rawData.req3.postalCode}`, 11, "normal", "left", 5);
        addText(`CPF/CNPJ: ${rawData.req3.document}`, 11, "normal", "left", 5);
        addText(`Email: ${rawData.req3.email}`, 11, "normal", "left", 5);
        addText(`Telefone/Whatsapp: ${rawData.req3.phone}`, 11, "normal", "left", 8);
    }
    
    addText("Reclamado(s):", 12, "bold", "left", 6);
    addText(`Nome: ${rawData.reqd1.name.toUpperCase()}`, 11, "normal", "left", 5);
    addText(`Endereço: R: ${rawData.reqd1.street.toUpperCase()} N: ${rawData.reqd1.number} ${rawData.reqd1.city.toUpperCase()}/${rawData.reqd1.state.toUpperCase()} CEP: ${rawData.reqd1.postalCode}`, 11, "normal", "left", 5);
    addText(`CPF/CNPJ: ${rawData.reqd1.document}`, 11, "normal", "left", 5);
    addText(`Email: ${rawData.reqd1.email}`, 11, "normal", "left", 5);
    addText(`Telefone/Whatsapp: ${rawData.reqd1.phone}`, 11, "normal", "left", 8);
    
    if (rawData.reqd2) {
        addText(`Nome: ${rawData.reqd2.name.toUpperCase()}`, 11, "normal", "left", 5);
        addText(`Endereço: R: ${rawData.reqd2.street.toUpperCase()} N: ${rawData.reqd2.number} ${rawData.reqd2.city.toUpperCase()}/${rawData.reqd2.state.toUpperCase()} CEP: ${rawData.reqd2.postalCode}`, 11, "normal", "left", 5);
        addText(`CPF/CNPJ: ${rawData.reqd2.document}`, 11, "normal", "left", 5);
        addText(`Email: ${rawData.reqd2.email}`, 11, "normal", "left", 5);
        addText(`Telefone/Whatsapp: ${rawData.reqd2.phone}`, 11, "normal", "left", 8);
    }
    if (rawData.reqd3) {
        addText(`Nome: ${rawData.reqd3.name.toUpperCase()}`, 11, "normal", "left", 5);
        addText(`Endereço: R: ${rawData.reqd3.street.toUpperCase()} N: ${rawData.reqd3.number} ${rawData.reqd3.city.toUpperCase()}/${rawData.reqd3.state.toUpperCase()} CEP: ${rawData.reqd3.postalCode}`, 11, "normal", "left", 5);
        addText(`CPF/CNPJ: ${rawData.reqd3.document}`, 11, "normal", "left", 5);
        addText(`Email: ${rawData.reqd3.email}`, 11, "normal", "left", 5);
        addText(`Telefone/Whatsapp: ${rawData.reqd3.phone}`, 11, "normal", "left", 8);
    }
    
    addText("I. Dos fatos (Breve relato sobre o caso)", 12, "bold", "left", 6);
    addText(rawData.report, 11, "normal", "left", 8);
    
    addText("II. Do(s) Pedido(s)", 12, "bold", "left", 6);
    addText(rawData.requestText, 11, "normal", "left", 8);
    
    addText("III. Valor da causa", 12, "bold", "left", 6);
    addText(`Valor do dano moral: ${rawData.valueOne}`, 11, "normal", "left", 5);
    addText(`Valor do dano material: ${rawData.valueTwo}`, 11, "normal", "left", 5);
    addText(`Dá-se a causa o valor total de: ${rawData.valueThree}`, 11, "bold", "left", 8);
    
    if (rawData.hasAnticipation) {
        addText("IV. Antecipação de tutela", 12, "bold", "left", 6);
        addText(rawData.anticipationText, 11, "normal", "left", 8);
    }
    
    y += 8;
    addText(rawData.fullTextDate, 11, "normal", "center", 15);
    
    // Assinaturas
    if (y > 240) { doc.addPage(); y = 30; }
    const atermacaoSignaturePage = doc.internal.getNumberOfPages();
    doc.line(40, y, 170, y);
    y += 4;
    addText(rawData.req1.name.toUpperCase(), 11, "bold", "center", 4);
    addText(rawData.req1.document, 10, "normal", "center", 12);
    
    if (rawData.req2) {
        if (y > 240) { doc.addPage(); y = 30; }
        doc.line(40, y, 170, y);
        y += 4;
        addText(rawData.req2.name.toUpperCase(), 11, "bold", "center", 4);
        addText(rawData.req2.document, 10, "normal", "center", 12);
    }
    if (rawData.req3) {
        if (y > 240) { doc.addPage(); y = 30; }
        doc.line(40, y, 170, y);
        y += 4;
        addText(rawData.req3.name.toUpperCase(), 11, "bold", "center", 4);
        addText(rawData.req3.document, 10, "normal", "center", 12);
    }

    // --- PÁGINAS ADICIONAIS: TERMOS DE ADESÃO ---
    async function addTermPage(reqData) {
        doc.addPage();
        y = 20;
        addText("documento gerado às " + rawData.headerTime + " do dia " + rawData.headerDate, 8, "normal", "right", 8);
        
        addText("PODER JUDICIÁRIO DE SANTA CATARINA", 12, "bold", "center", 6);
        addText("Comarca de Itapoá - 1ª Vara Judicial", 11, "bold", "center", 5);
        addText("Rua Mariana Michels Borges, 776 - Bairro: Itapema do Norte - CEP: 89249-000", 9, "normal", "center", 4);
        addText("Fone: (47) 3130-8408 • Email: itapoa.vara1@tjsc.jus.br", 9, "normal", "center", 6);
        
        doc.line(20, y, 190, y);
        y += 8;
        
        addText("TERMO DE ADESÃO", 14, "bold", "center", 8);
        addText("Autos n.", 11, "bold", "left", 5);
        addText("Classe do Processo PROCEDIMENTO DO JUIZADO ESPECIAL CÍVEL", 10, "normal", "left", 10);
        
        const termBody = `Eu, ${reqData.name.toUpperCase()}, CPF: ${reqData.document}, residente e domiciliado rua ${reqData.street.toUpperCase()} ${reqData.number} - ${reqData.district.toUpperCase()} – ${reqData.city.toUpperCase()}/${reqData.state.toUpperCase()} – ${reqData.postalCode}, adiro voluntariamente à utilização do aplicativo de mensagens Whatsapp para receber intimações decorrentes da tramitação do processo acima informado, enviadas a partir do número telefônico (número do telefone distribuído à Secretaria do Juizado Especial). Para tanto, informo que receberei as intimações no telefone celular número ${reqData.phone} ou pelo e-mail ${reqData.email} e assumo o compromisso de comunicar imediatamente ao juízo a alteração do número de telefone informado e assinar novo termo de adesão, reputando eficazes as intimações enviadas ao telefone anteriormente cadastrado na ausência de comunicação da mudança.`;
        
        addText(termBody, 11, "normal", "left", 6);
        y += 4;
        
        addText("Por este ato me declaro ciente do inteiro teor da Resolução Conjunta GP/CGJ n. 6 de 5 de outubro de 2017 e afirmo que:", 11, "normal", "left", 6);
        y += 2;
        
        const bullets = [
            "concordo com os termos da Resolução Conjunta GP/CGJ n. 6 de 5 de outubro de 2017 e com a intimação efetuada por meio do aplicativo de mensagens do Whatsapp;",
            "possuo o aplicativo de mensagens Whatsapp no aparelho de telefone ora informado;",
            "manterei ativa, na configuração de privacidade do aplicativo de mensagens Whatsapp, a opção recibo/confirmação de leitura;",
            "fui informado (a) sobre o número de telefone que será utilizado pela secretaria do Juizado Especial para realizar as intimações com a utilização do aplicativo de mensagens Whatsapp;",
            "fui cientificado (a) de que o Poder Judiciário do Estado de Santa Catarina, em nenhuma hipótese, solicita dados pessoais, bancários ou quaisquer outros de caráter sigiloso, limitando-se à utilização do aplicativo de mensagens Whatsapp para efetuar intimações; e",
            "Fui cientificado (a) de que as dúvidas referentes à intimação deverão ser tratadas exclusivamente na Secretaria do Juizado Especial na qual tramita o processo referido neste termo."
        ];
        
        bullets.forEach(bullet => {
            if (y > 270) { doc.addPage(); y = 20; }
            const bulletLines = doc.splitTextToSize("• " + bullet, 165);
            bulletLines.forEach(line => {
                if (y > 270) { doc.addPage(); y = 20; }
                doc.text(line, 25, y);
                y += 5;
            });
            y += 2;
        });
        
        y += 8;
        addText(rawData.fullTextDate, 11, "normal", "center", 15);
        
        if (y > 250) { doc.addPage(); y = 40; }
        adhesionSignaturePages.push(doc.internal.getNumberOfPages());
        doc.line(40, y, 170, y);
        y += 4;
        addText(reqData.name.toUpperCase(), 11, "bold", "center", 4);
    }

    const adhesionSignaturePages = [];

    await addTermPage(rawData.req1);
    if (rawData.req2) await addTermPage(rawData.req2);
    if (rawData.req3) await addTermPage(rawData.req3);

    // --- PÁGINAS ADICIONAIS: DOCUMENTOS ANEXOS ---
    async function addImagePage(title, dataUrl) {
        if (!dataUrl) return;
        const dims = await getImageDimensions(dataUrl);
        doc.addPage();
        y = 20;
        
        addText("PODER JUDICIÁRIO DE SANTA CATARINA", 12, "bold", "center", 6);
        addText("Comarca de Itapoá - 1ª Vara Judicial", 11, "bold", "center", 5);
        addText("Rua Mariana Michels Borges, 776 - Bairro: Itapema do Norte - CEP: 89249-000", 9, "normal", "center", 4);
        addText("Fone: (47) 3130-8408 • Email: itapoa.vara1@tjsc.jus.br", 9, "normal", "center", 6);
        addText("DOCUMENTO ANEXO", 12, "bold", "center", 5);
        addText(title.toUpperCase(), 10, "bold", "center", 6);
        
        y += 2;
        doc.line(20, y, 190, y);
        y += 8;
        
        try {
            const maxWidth = 170;
            const maxHeight = 210;
            
            let w = dims.width;
            let h = dims.height;
            
            if (w > maxWidth) {
                const ratio = maxWidth / w;
                w = maxWidth;
                h = h * ratio;
            }
            if (h > maxHeight) {
                const ratio = maxHeight / h;
                h = maxHeight;
                w = w * ratio;
            }
            
            const x = 20 + (maxWidth - w) / 2;
            let format = 'JPEG';
            if (dataUrl.includes('image/png') || dataUrl.includes('image/PNG')) {
                format = 'PNG';
            }
            
            doc.addImage(dataUrl, format, x, y, w, h, undefined, 'FAST');
        } catch (err) {
            console.error("Erro ao adicionar imagem ao PDF:", err);
            addText("[Erro ao renderizar esta imagem no PDF. O arquivo base64 pode estar corrompido ou em formato incompatível.]", 10, "italic", "center", 6);
        }
    }

    if (rawData.attachedFiles) {
        if (rawData.attachedFiles.idDoc) {
            const idDocs = Array.isArray(rawData.attachedFiles.idDoc) ? rawData.attachedFiles.idDoc : [rawData.attachedFiles.idDoc];
            for (let idx = 0; idx < idDocs.length; idx++) {
                const docDataUrl = idDocs[idx];
                if (docDataUrl && !docDataUrl.startsWith("data:application/pdf")) {
                    await addImagePage(`Documento de Identificação - Parte ${idx + 1}`, docDataUrl);
                }
            }
        }
        if (rawData.attachedFiles.residenceDoc) {
            const resDocs = Array.isArray(rawData.attachedFiles.residenceDoc) ? rawData.attachedFiles.residenceDoc : [rawData.attachedFiles.residenceDoc];
            for (let idx = 0; idx < resDocs.length; idx++) {
                const docDataUrl = resDocs[idx];
                if (docDataUrl && !docDataUrl.startsWith("data:application/pdf")) {
                    await addImagePage(`Comprovante de Residência - Parte ${idx + 1}`, docDataUrl);
                }
            }
        }
        if (rawData.attachedFiles.claimDocs && rawData.attachedFiles.claimDocs.length > 0) {
            for (let idx = 0; idx < rawData.attachedFiles.claimDocs.length; idx++) {
                const docDataUrl = rawData.attachedFiles.claimDocs[idx];
                if (docDataUrl && !docDataUrl.startsWith("data:application/pdf")) {
                    await addImagePage(`Documento da Reclamação - Parte ${idx + 1}`, docDataUrl);
                }
            }
        }
    }

    // Set autoPrint on the jsPDF doc
    doc.autoPrint({ variant: 'non-conform' });

    // Convert jsPDF document to ArrayBuffer
    const pdfBytes = doc.output('arraybuffer');
    let finalTotalPages = doc.internal.getNumberOfPages();

    // Collect all PDF attachments
    const pdfAttachments = [];
    if (rawData.attachedFiles) {
        if (rawData.attachedFiles.idDoc) {
            const idDocs = Array.isArray(rawData.attachedFiles.idDoc) ? rawData.attachedFiles.idDoc : [rawData.attachedFiles.idDoc];
            idDocs.forEach((docDataUrl, idx) => {
                if (docDataUrl && docDataUrl.startsWith("data:application/pdf")) {
                    pdfAttachments.push({ title: `Documento de Identificação - Parte ${idx + 1}`, dataUrl: docDataUrl });
                }
            });
        }
        if (rawData.attachedFiles.residenceDoc) {
            const resDocs = Array.isArray(rawData.attachedFiles.residenceDoc) ? rawData.attachedFiles.residenceDoc : [rawData.attachedFiles.residenceDoc];
            resDocs.forEach((docDataUrl, idx) => {
                if (docDataUrl && docDataUrl.startsWith("data:application/pdf")) {
                    pdfAttachments.push({ title: `Comprovante de Residência - Parte ${idx + 1}`, dataUrl: docDataUrl });
                }
            });
        }
        if (rawData.attachedFiles.claimDocs && rawData.attachedFiles.claimDocs.length > 0) {
            rawData.attachedFiles.claimDocs.forEach((docDataUrl, idx) => {
                if (docDataUrl && docDataUrl.startsWith("data:application/pdf")) {
                    pdfAttachments.push({ title: `Documento da Reclamação - Parte ${idx + 1}`, dataUrl: docDataUrl });
                }
            });
        }
    }

    let finalPdfBytes = pdfBytes;

    // Merge PDF attachments using pdf-lib if available
    if (pdfAttachments.length > 0 && window.PDFLib) {
        try {
            const mergedPdf = await PDFLib.PDFDocument.load(pdfBytes);
            for (const att of pdfAttachments) {
                const base64Data = att.dataUrl.split(',')[1];
                const binaryString = atob(base64Data);
                const len = binaryString.length;
                const bytes = new Uint8Array(len);
                for (let i = 0; i < len; i++) {
                    bytes[i] = binaryString.charCodeAt(i);
                }
                const attachmentPdf = await PDFLib.PDFDocument.load(bytes);
                const copiedPages = await mergedPdf.copyPages(attachmentPdf, attachmentPdf.getPageIndices());
                
                const normalizedPages = [];
                for (let i = 0; i < copiedPages.length; i++) {
                    const normPage = await forcePageToA4Portrait(mergedPdf, copiedPages[i], i === 0);
                    normalizedPages.push(normPage);
                }
                
                // Desenha cabeçalho oficial na primeira página de cada PDF anexado
                if (normalizedPages.length > 0) {
                    await drawHeaderOnPDFPage(mergedPdf, normalizedPages[0], att.title);
                }
            }
            finalPdfBytes = await mergedPdf.save();
            finalTotalPages = mergedPdf.getPageCount();
        } catch (e) {
            console.error("Erro ao mesclar PDFs com pdf-lib:", e);
        }
    }

    // Return custom wrapper that mimics jsPDF download/print methods
    return {
        save: (filename) => {
            const blob = new Blob([finalPdfBytes], { type: 'application/pdf' });
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = filename;
            link.click();
            setTimeout(() => URL.revokeObjectURL(link.href), 100);
        },
        autoPrint: () => {
            const blob = new Blob([finalPdfBytes], { type: 'application/pdf' });
            const blobUrl = URL.createObjectURL(blob);
            
            // Open in a new window/tab, which will auto print because autoPrint() is set in the PDF actions.
            const printWindow = window.open(blobUrl, '_blank');
            if (printWindow) {
                printWindow.focus();
            }
        },
        output: (type) => {
            if (type === 'blob') {
                return new Blob([finalPdfBytes], { type: 'application/pdf' });
            }
            if (type === 'arraybuffer') {
                return finalPdfBytes;
            }
            return finalPdfBytes;
        },
        pageInfo: {
            atermacaoSignaturePage: atermacaoSignaturePage,
            adhesionSignaturePages: adhesionSignaturePages,
            totalPages: finalTotalPages
        }
    };
}
