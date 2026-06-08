let historyData = [];

document.addEventListener("DOMContentLoaded", () => {
    const historyBody = document.getElementById("historyBody");
    const searchInput = document.getElementById("searchInput");
    const noData = document.getElementById("noData");

    // Elementos de Impressão locais
    const firstTerm = {
        display: $("#firstTerm"),
        headerTime: $("#firstTermHeaderTimeTarget"),
        headerDate: $("#firstTermHeaderDateTarget"),
        name: $("#firstTermNameTarget"),
        document: $("#firstTermDocumentTarget"),
        street: $("#firstTermStreetTarget"),
        number: $("#firstTermNumberTarget"),
        district: $("#firstTermDistrictTarget"),
        cityState: $("#firstTermCityStateTarget"),
        postalCode: $("#firstTermPostalCodeTarget"),
        phone: $("#firstTermPhoneTarget"),
        email: $("#firstTermEmailTarget"),
        fullDate: $("#firstTermDateTarget"),
        signerName: $("#firstTermSignerTarget")
    };

    const secondTerm = {
        display: $("#secondTerm"),
        headerTime: $("#secondTermHeaderTimeTarget"),
        headerDate: $("#secondTermHeaderDateTarget"),
        name: $("#secondTermNameTarget"),
        document: $("#secondTermDocumentTarget"),
        street: $("#secondTermStreetTarget"),
        number: $("#secondTermNumberTarget"),
        district: $("#secondTermDistrictTarget"),
        cityState: $("#secondTermCityStateTarget"),
        postalCode: $("#secondTermPostalCodeTarget"),
        phone: $("#secondTermPhoneTarget"),
        email: $("#secondTermEmailTarget"),
        fullDate: $("#secondTermDateTarget"),
        signerName: $("#secondTermSignerTarget")
    };

    const thirdTerm = {
        display: $("#thirdTerm"),
        headerTime: $("#thirdTermHeaderTimeTarget"),
        headerDate: $("#thirdTermHeaderDateTarget"),
        name: $("#thirdTermNameTarget"),
        document: $("#thirdTermDocumentTarget"),
        street: $("#thirdTermStreetTarget"),
        number: $("#thirdTermNumberTarget"),
        district: $("#thirdTermDistrictTarget"),
        cityState: $("#thirdTermCityStateTarget"),
        postalCode: $("#thirdTermPostalCodeTarget"),
        phone: $("#thirdTermPhoneTarget"),
        email: $("#thirdTermEmailTarget"),
        fullDate: $("#thirdTermDateTarget"),
        signerName: $("#thirdTermSignerTarget")
    };

    const doc1Requester = {
        name: $("#fr_nameTarget"),
        address: $("#fr_addressTarget"),
        document: $("#fr_documentTarget"),
        email: $("#fr_emailTarget"),
        phone: $("#fr_phoneTarget")
    };

    const doc1SecondRequester = {
        name: $("#sr_nameTarget"),
        address: $("#sr_addressTarget"),
        document: $("#sr_documentTarget"),
        email: $("#sr_emailTarget"),
        phone: $("#sr_phoneTarget"),
        display: $("#sr_displayTarget")
    };

    const doc1ThirdRequester = {
        name: $("#tr_nameTarget"),
        address: $("#tr_addressTarget"),
        document: $("#tr_documentTarget"),
        email: $("#tr_emailTarget"),
        phone: $("#tr_phoneTarget"),
        display: $("#tr_displayTarget")
    };

    const doc1Required = {
        name: $("#frd_nameTarget"),
        address: $("#frd_addressTarget"),
        document: $("#frd_documentTarget"),
        email: $("#frd_emailTarget"),
        phone: $("#frd_phoneTarget")
    };

    const doc1SecondRequired = {
        name: $("#srd_nameTarget"),
        address: $("#srd_addressTarget"),
        document: $("#srd_documentTarget"),
        email: $("#srd_emailTarget"),
        phone: $("#srd_phoneTarget"),
        display: $("#srd_displayTarget")
    };

    const doc1ThirdRequired = {
        name: $("#trd_nameTarget"),
        address: $("#trd_addressTarget"),
        document: $("#trd_documentTarget"),
        email: $("#trd_emailTarget"),
        phone: $("#trd_phoneTarget"),
        display: $("#trd_displayTarget")
    };

    const doc1General = {
        report: $("#reportTarget"),
        requestText: $("#requestTextTarget"),
        anticipationTopDisplay: $("#anticipationDisplayTarget"),
        anticipationText: $("#anticipationTextTarget"),
        anticipationTextDisplay: $("#anticipationTextDisplay"),
        firstValue: $("#firstValue"),
        secondValue: $("#secondValue"),
        thirdValue: $("#thirdValue"),
        firstSignerName: $("#firstSignerNameTarget"),
        firstSignerDocument: $("#firstSignerDocument"),
        secondSignerDisplay: $("#secondSignerDisplay"),
        secondSignerName: $("#secondSignerNameTarget"),
        secondSignerDocument: $("#secondSignerDocument"),
        thirdSignerDisplay: $("#thirdSignerDisplay"),
        thirdSignerName: $("#thirdSignerNameTarget"),
        thirdSignerDocument: $("#thirdSignerDocument"),
        date: $("#dateTarget"),
        headerDate: $("#headerDateTarget"),
        headerTime: $("#headerTimeTarget")
    };

    // Adaptador de Storage Genérico
    const storage = {
        get: (keys, callback) => {
            if (typeof chrome !== "undefined" && chrome.storage && chrome.storage.local) {
                chrome.storage.local.get(keys, callback);
            } else {
                const res = {};
                const keysArray = Array.isArray(keys) ? keys : [keys];
                keysArray.forEach(k => {
                    let val = localStorage.getItem(k);
                    if (k === "jecHistory" && !val) {
                        const oldVal = localStorage.getItem("jec_history");
                        if (oldVal) {
                            localStorage.setItem("jecHistory", oldVal);
                            localStorage.removeItem("jec_history");
                            val = oldVal;
                        }
                    }
                    res[k] = val ? JSON.parse(val) : null;
                });
                callback(res);
            }
        },
        set: (data, callback) => {
            if (typeof chrome !== "undefined" && chrome.storage && chrome.storage.local) {
                chrome.storage.local.set(data, callback);
            } else {
                Object.entries(data).forEach(([k, v]) => {
                    if (v === null) {
                        localStorage.removeItem(k);
                    } else {
                        localStorage.setItem(k, JSON.stringify(v));
                    }
                });
                if (callback) callback();
            }
        }
    };

    function loadHistory() {
        storage.get("jecHistory", (data) => {
            historyData = data.jecHistory || [];
            renderTable(historyData);
        });
    }

    function renderTable(data) {
        historyBody.innerHTML = "";

        if (data.length === 0) {
            noData.classList.remove("hidden");
            return;
        } else {
            noData.classList.add("hidden");
        }

        data.forEach(item => {
            const tr = document.createElement("tr");

            tr.innerHTML = `
                <td><strong>${item.date}</strong></td>
                <td>${item.requesterName}</td>
                <td>${item.requiredName}</td>
                <td style="font-weight: 600; color: var(--color-primary);">${item.causeValue}</td>
                <td style="text-align: center;">
                    <div style="display: flex; gap: 8px; justify-content: center;">
                        <button class="btn-action btn-edit" title="Editar Atermação" data-id="${item.id}">
                            <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M12 20h9"></path>
                                <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                            </svg>
                        </button>
                        <button class="btn-action btn-download" title="Baixar PDF" data-id="${item.id}">
                            <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                <polyline points="7 10 12 15 17 10"></polyline>
                                <line x1="12" y1="15" x2="12" y2="3"></line>
                            </svg>
                        </button>
                        <button class="btn-action btn-print" title="Imprimir Documento" data-id="${item.id}">
                            <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <polyline points="6 9 6 2 18 2 18 9"></polyline>
                                <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
                                <rect x="6" y="14" width="12" height="8"></rect>
                            </svg>
                        </button>
                        <a href="https://www.gov.br/pt-br/servicos/assinatura-eletronica" target="_blank" class="btn-action btn-sign" title="Assinar no GOV.BR" style="text-decoration: none;">
                            <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                <polyline points="14 2 14 8 20 8"></polyline>
                                <polyline points="9 15 11 17 15 13"></polyline>
                            </svg>
                        </a>
                        <button class="btn-action btn-email" title="Enviar por E-mail" data-id="${item.id}">
                            <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                <polyline points="22,6 12,13 2,6"></polyline>
                            </svg>
                        </button>
                        <button class="btn-action btn-delete" title="Excluir Registro" data-id="${item.id}">
                            <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <polyline points="3 6 5 6 21 6"></polyline>
                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                <line x1="10" y1="11" x2="10" y2="17"></line>
                                <line x1="14" y1="11" x2="14" y2="17"></line>
                            </svg>
                        </button>
                    </div>
                </td>
            `;

            historyBody.appendChild(tr);
        });

        // Event Listeners
        document.querySelectorAll(".btn-edit").forEach(btn => {
            btn.addEventListener("click", (e) => {
                const id = parseInt(e.currentTarget.getAttribute("data-id"));
                editEntry(id);
            });
        });

        document.querySelectorAll(".btn-delete").forEach(btn => {
            btn.addEventListener("click", (e) => {
                const id = parseInt(e.currentTarget.getAttribute("data-id"));
                deleteEntry(id);
            });
        });

        document.querySelectorAll(".btn-download").forEach(btn => {
            btn.addEventListener("click", async (e) => {
                const id = parseInt(e.currentTarget.getAttribute("data-id"));
                const item = historyData.find(i => i.id === id);
                if (item) {
                    try {
                        const doc = await generatePDFProgrammatically(item.rawData);
                        const filename = `Atermacao_JEC_${item.requesterName.replace(/\s+/g, "_")}.pdf`;
                        doc.save(filename);
                    } catch (err) {
                        console.error("Erro ao gerar PDF:", err);
                        alert("Ocorreu um erro ao reconstruir o PDF das fotos e dados.");
                    }
                }
            });
        });

        document.querySelectorAll(".btn-print").forEach(btn => {
            btn.addEventListener("click", (e) => {
                const id = parseInt(e.currentTarget.getAttribute("data-id"));
                const item = historyData.find(i => i.id === id);
                if (item) {
                    printEntry(item);
                }
            });
        });

        document.querySelectorAll(".btn-email").forEach(btn => {
            btn.addEventListener("click", async (e) => {
                const id = parseInt(e.currentTarget.getAttribute("data-id"));
                const item = historyData.find(i => i.id === id);
                if (!item) return;

                try {
                    // Gerar PDF e baixar
                    const doc = await generatePDFProgrammatically(item.rawData);
                    const cleanName = item.requesterName.replace(/\s+/g, "_");
                    const filename = `Atermacao_JEC_${cleanName}.pdf`;
                    doc.save(filename);

                    // Montar mailto
                    const email = "itapoa.distribuicao@tjsc.jus.br";
                    const subject = `Atermação JEC - ${item.requesterName}`;
                    const body = `Prezado(a),

Seguem em anexo os documentos da atermação de ${item.requesterName} (Reclamado: ${item.requiredName}) para as providências cabíveis.

[Importante: Por favor, anexe manualmente a este e-mail o arquivo PDF "${filename}" que acabou de ser baixado na sua pasta de Downloads].

Atenciosamente,
Cronos TJSC`;

                    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                    window.location.href = mailtoUrl;
                } catch (err) {
                    console.error("Erro ao gerar PDF para envio por e-mail:", err);
                    alert("Ocorreu um erro ao reconstruir o PDF da atermação.");
                }
            });
        });
    }

    function deleteEntry(id) {
        if (confirm("Deseja realmente excluir esta atermação do histórico? Esta ação é irreversível.")) {
            historyData = historyData.filter(item => item.id !== id);
            storage.set({ jecHistory: historyData }, () => {
                renderTable(historyData);
            });
        }
    }

    function editEntry(id) {
        storage.set({ jecEditId: id }, () => {
            window.location.href = "./form.html";
        });
    }

    async function printEntry(item) {
        try {
            const doc = await generatePDFProgrammatically(item.rawData);
            doc.autoPrint();
        } catch (err) {
            console.error("Erro ao imprimir PDF do histórico:", err);
            alert("Ocorreu um erro ao reconstruir o PDF para impressão.");
        }
    }

    // Filtro dinâmico de busca
    searchInput.addEventListener("input", (e) => {
        const query = e.target.value.toLowerCase();
        const filtered = historyData.filter(item => {
            const req = (item.requesterName || "").toLowerCase();
            const reqd = (item.requiredName || "").toLowerCase();
            const dateStr = (item.date || "").toLowerCase();
            
            return req.includes(query) || reqd.includes(query) || dateStr.includes(query);
        });
        renderTable(filtered);
    });

    // Sticky Header Scroll Listener
    const tabsEl = document.querySelector('.dashboard-tabs');
    if (tabsEl) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 40) {
                tabsEl.classList.add('stuck');
            } else {
                tabsEl.classList.remove('stuck');
            }
        });
    }

    loadHistory();
});
