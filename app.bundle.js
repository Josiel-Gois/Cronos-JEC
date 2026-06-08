document.addEventListener("DOMContentLoaded", () => {
    // Enable exit warning (CSP-compliant)
    window.onbeforeunload = function() {
        return "Tem a certeza que quer sair da pagina?";
    };

    // 1. Elements definitions
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

    const formInputs = {
        report: $("#reportCase"),
        request: $("#request"),
        anticipationCause: $("#anticipation"),
        valueOne: $("#valueOne"),
        valueTwo: $("#valueTwo"),
        valueTree: $("#valueTree"),
        invalidReport: $("#invalidReport"),
        invalidRequest: $("#invalidRequest"),
        invalidAnticipationCause: $("#invalidAnticipationCause"),
        invalidValueOne: $("#invalidValueOne"),
        invalidValueTwo: $("#invalidValueTwo"),
        invalidValueTree: $("#invalidValueTree")
    };

    const displays = {
        secondRequesterInfoDisplay: $("#sr_infoFieldDisplayTarget"),
        secondRequesterAddressDisplay: $("#sr_addressFieldDisplayTarget"),
        secondRequiredInfoDisplay: $("#srd_infoFieldDisplayTarget"),
        secondRequiredAddressDisplay: $("#srd_addressFieldDisplayTarget"),
        thirdRequesterInfoDisplay: $("#tr_infoFieldDisplayTarget"),
        thirdRequesterAddressDisplay: $("#tr_addressFieldDisplayTarget"),
        thirdRequiredInfoDisplay: $("#trd_infoFieldDisplayTarget"),
        thirdRequiredAddressDisplay: $("#trd_addressFieldDisplayTarget"),
        secondSignerDisplay: $("#secondSignerDisplay"),
        thirdSignerDisplay: $("#thirdSignerDisplay")
    };

    const mainRequester = {
        name: $("#fr_name"),
        document: $("#fr_document"),
        email: $("#fr_email"),
        phone: $("#fr_phone"),
        street: $("#fr_street"),
        number: $("#fr_number"),
        district: $("#fr_district"),
        city: $("#fr_city"),
        state: $("#fr_state"),
        postalCode: $("#fr_postalCode"),
        invalidName: $("#fr_invalidName"),
        invalidDocument: $("#fr_invalidDocument"),
        invalidEmail: $("#fr_invalidEmail"),
        invalidPhone: $("#fr_invalidPhone"),
        invalidStreet: $("#fr_invalidStreet"),
        invalidNumber: $("#fr_invalidNumber"),
        invalidDistrict: $("#fr_invalidDistrict"),
        invalidCity: $("#fr_invalidCity"),
        invalidState: $("#fr_invalidState"),
        invalidPostalCode: $("#fr_invalidPostalCode")
    };

    const doc1Requester = {
        name: $("#fr_nameTarget"),
        address: $("#fr_addressTarget"),
        document: $("#fr_documentTarget"),
        email: $("#fr_emailTarget"),
        phone: $("#fr_phoneTarget")
    };

    const secondRequester = {
        name: $("#sr_name"),
        document: $("#sr_document"),
        email: $("#sr_email"),
        phone: $("#sr_phone"),
        street: $("#sr_street"),
        number: $("#sr_number"),
        district: $("#sr_district"),
        city: $("#sr_city"),
        state: $("#sr_state"),
        postalCode: $("#sr_postalCode"),
        invalidName: $("#sr_invalidName"),
        invalidDocument: $("#sr_invalidDocument"),
        invalidEmail: $("#sr_invalidEmail"),
        invalidPhone: $("#sr_invalidPhone"),
        invalidStreet: $("#sr_invalidStreet"),
        invalidNumber: $("#sr_invalidNumber"),
        invalidDistrict: $("#sr_invalidDistrict"),
        invalidCity: $("#sr_invalidCity"),
        invalidState: $("#sr_invalidState"),
        invalidPostalCode: $("#sr_invalidPostalCode")
    };

    const doc1SecondRequester = {
        name: $("#sr_nameTarget"),
        address: $("#sr_addressTarget"),
        document: $("#sr_documentTarget"),
        email: $("#sr_emailTarget"),
        phone: $("#sr_phoneTarget"),
        display: $("#sr_displayTarget")
    };

    const thirdRequester = {
        name: $("#tr_name"),
        document: $("#tr_document"),
        email: $("#tr_email"),
        phone: $("#tr_phone"),
        street: $("#tr_street"),
        number: $("#tr_number"),
        district: $("#tr_district"),
        city: $("#tr_city"),
        state: $("#tr_state"),
        postalCode: $("#tr_postalCode"),
        invalidName: $("#tr_invalidName"),
        invalidDocument: $("#tr_invalidDocument"),
        invalidEmail: $("#tr_invalidEmail"),
        invalidPhone: $("#tr_invalidPhone"),
        invalidStreet: $("#tr_invalidStreet"),
        invalidNumber: $("#tr_invalidNumber"),
        invalidDistrict: $("#tr_invalidDistrict"),
        invalidCity: $("#tr_invalidCity"),
        invalidState: $("#tr_invalidState"),
        invalidPostalCode: $("#tr_invalidPostalCode")
    };

    const doc1ThirdRequester = {
        name: $("#tr_nameTarget"),
        address: $("#tr_addressTarget"),
        document: $("#tr_documentTarget"),
        email: $("#tr_emailTarget"),
        phone: $("#tr_phoneTarget"),
        display: $("#tr_displayTarget")
    };

    const mainRequired = {
        name: $("#frd_name"),
        document: $("#frd_document"),
        email: $("#frd_email"),
        phone: $("#frd_phone"),
        street: $("#frd_street"),
        number: $("#frd_number"),
        district: $("#frd_district"),
        city: $("#frd_city"),
        state: $("#frd_state"),
        postalCode: $("#frd_postalCode"),
        invalidName: $("#frd_invalidName"),
        invalidDocument: $("#frd_invalidDocument"),
        invalidEmail: $("#frd_invalidEmail"),
        invalidPhone: $("#frd_invalidPhone"),
        invalidStreet: $("#frd_invalidStreet"),
        invalidNumber: $("#frd_invalidNumber"),
        invalidDistrict: $("#frd_invalidDistrict"),
        invalidCity: $("#frd_invalidCity"),
        invalidState: $("#frd_invalidState"),
        invalidPostalCode: $("#frd_invalidPostalCode")
    };

    const doc1Required = {
        name: $("#frd_nameTarget"),
        address: $("#frd_addressTarget"),
        document: $("#frd_documentTarget"),
        email: $("#frd_emailTarget"),
        phone: $("#frd_phoneTarget")
    };

    const secondRequired = {
        name: $("#srd_name"),
        document: $("#srd_document"),
        email: $("#srd_email"),
        phone: $("#srd_phone"),
        street: $("#srd_street"),
        number: $("#srd_number"),
        district: $("#srd_district"),
        city: $("#srd_city"),
        state: $("#srd_state"),
        postalCode: $("#srd_postalCode"),
        invalidName: $("#srd_invalidName"),
        invalidDocument: $("#srd_invalidDocument"),
        invalidEmail: $("#srd_invalidEmail"),
        invalidPhone: $("#srd_invalidPhone"),
        invalidStreet: $("#srd_invalidStreet"),
        invalidNumber: $("#srd_invalidNumber"),
        invalidDistrict: $("#srd_invalidDistrict"),
        invalidCity: $("#srd_invalidCity"),
        invalidState: $("#srd_invalidState"),
        invalidPostalCode: $("#srd_invalidPostalCode")
    };

    const doc1SecondRequired = {
        name: $("#srd_nameTarget"),
        address: $("#srd_addressTarget"),
        document: $("#srd_documentTarget"),
        email: $("#srd_emailTarget"),
        phone: $("#srd_phoneTarget"),
        display: $("#srd_displayTarget")
    };

    const thirdRequired = {
        name: $("#trd_name"),
        document: $("#trd_document"),
        email: $("#trd_email"),
        phone: $("#trd_phone"),
        street: $("#trd_street"),
        number: $("#trd_number"),
        district: $("#trd_district"),
        city: $("#trd_city"),
        state: $("#trd_state"),
        postalCode: $("#trd_postalCode"),
        invalidName: $("#trd_invalidName"),
        invalidDocument: $("#trd_invalidDocument"),
        invalidEmail: $("#trd_invalidEmail"),
        invalidPhone: $("#trd_invalidPhone"),
        invalidStreet: $("#trd_invalidStreet"),
        invalidNumber: $("#trd_invalidNumber"),
        invalidDistrict: $("#trd_invalidDistrict"),
        invalidCity: $("#trd_invalidCity"),
        invalidState: $("#trd_invalidState"),
        invalidPostalCode: $("#trd_invalidPostalCode")
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
        requests: $("#requestsTarget"),
        requestText: $("#requestTextTarget"),
        anticipationTopDisplay: $("#anticipationDisplayTarget"),
        anticipationText: $("#anticipationTextTarget"),
        anticipationTextDisplay: $("#anticipationTextDisplay"),
        firstValue: $("#firstValue"),
        secondValue: $("#secondValue"),
        thirdValue: $("#thirdValue"),
        firstSignerName: $("#firstSignerNameTarget"),
        firstSignerDocument: $("#firstSignerDocument"),
        secondSignerName: $("#secondSignerNameTarget"),
        secondSignerDocument: $("#secondSignerDocument"),
        thirdSignerName: $("#thirdSignerNameTarget"),
        thirdSignerDocument: $("#thirdSignerDocument"),
        date: $("#dateTarget"),
        headerDate: $("#headerDateTarget"),
        headerTime: $("#headerTimeTarget")
    };

    const checkboxes = {
        firstRequesterCheck: $("#fr_check"),
        secondRequesterCheck: $("#sr_check"),
        firstRequiredCheck: $("#frd_check"),
        secondRequiredCheck: $("#srd_check")
    };

    // 2. Attached Files State
    let attachedFiles = {
        idDoc: [],
        residenceDoc: [],
        claimDocs: []
    };

    // File input event listeners
    $("#file_idDoc").on("change", (e) => {
        const files = e.target.files;
        if (files) {
            Array.from(files).forEach(file => {
                const reader = new FileReader();
                reader.onload = (event) => {
                    attachedFiles.idDoc.push(event.target.result);
                    renderMultiPreview("idDoc");
                };
                reader.readAsDataURL(file);
            });
        }
    });

    $("#file_residenceDoc").on("change", (e) => {
        const files = e.target.files;
        if (files) {
            Array.from(files).forEach(file => {
                const reader = new FileReader();
                reader.onload = (event) => {
                    attachedFiles.residenceDoc.push(event.target.result);
                    renderMultiPreview("residenceDoc");
                };
                reader.readAsDataURL(file);
            });
        }
    });

    $("#file_claimDocs").on("change", (e) => {
        const files = e.target.files;
        if (files) {
            Array.from(files).forEach(file => {
                const reader = new FileReader();
                reader.onload = (event) => {
                    attachedFiles.claimDocs.push(event.target.result);
                    renderMultiPreview("claimDocs");
                };
                reader.readAsDataURL(file);
            });
        }
    });

    function renderMultiPreview(type) {
        const container = $(`#preview_${type}`);
        container.empty();
        const filesArray = attachedFiles[type];
        if (filesArray && filesArray.length > 0) {
            container.removeClass("hidden");
            filesArray.forEach((dataUrl, index) => {
                const isPdf = dataUrl && dataUrl.startsWith("data:application/pdf");
                const previewContent = isPdf ? `
                    <div class="pdf-preview-box" style="display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 15px; border: 1.5px dashed var(--color-border); border-radius: 8px; background: rgba(231, 76, 60, 0.05); width: 100px; height: 100px; position: relative;">
                        <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="#e74c3c" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                            <polyline points="14 2 14 8 20 8"></polyline>
                        </svg>
                        <span style="font-size: 10px; color: var(--color-text); margin-top: 5px; font-weight: bold; text-align: center; max-width: 90px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">PDF Anexado</span>
                    </div>
                ` : `<img src="${dataUrl}" alt="Preview">`;

                const item = $(`
                    <div class="file-preview-item">
                        ${previewContent}
                        <button type="button" class="remove-preview-btn">&times;</button>
                    </div>
                `);
                item.find(".remove-preview-btn").on("click", () => {
                    attachedFiles[type].splice(index, 1);
                    renderMultiPreview(type);
                    if (attachedFiles[type].length === 0) {
                        $(`#file_${type}`).val("");
                        container.addClass("hidden");
                    }
                });
                container.append(item);
            });
        } else {
            container.addClass("hidden");
        }
    }

    // 3. Validation Logic
    function validateForm() {
        let isValid = true;
        let alreadyScrolled = false;
        let secondRequesterExist = false;
        let secondRequiredExist = false;
        let thirdRequesterExist = false;
        let thirdRequiredExist = false;

        function checkField(input, errorEl, scrollTarget) {
            if (!input.val()) {
                errorEl.removeClass("hidden");
                if (!alreadyScrolled) {
                    $("html, body").animate({ scrollTop: scrollTarget.offset().top - 150 }, 800);
                    alreadyScrolled = true;
                }
                isValid = false;
            } else {
                errorEl.addClass("hidden");
            }
        }

        // Main Requester
        checkField(mainRequester.name, mainRequester.invalidName, $("#fr_infoScrollTarget"));
        checkField(mainRequester.document, mainRequester.invalidDocument, $("#fr_infoScrollTarget"));
        checkField(mainRequester.email, mainRequester.invalidEmail, $("#fr_infoScrollTarget"));
        checkField(mainRequester.phone, mainRequester.invalidPhone, $("#fr_infoScrollTarget"));
        checkField(mainRequester.street, mainRequester.invalidStreet, $("#fr_addressScrollTarget"));
        checkField(mainRequester.number, mainRequester.invalidNumber, $("#fr_addressScrollTarget"));
        checkField(mainRequester.district, mainRequester.invalidDistrict, $("#fr_addressScrollTarget"));
        checkField(mainRequester.city, mainRequester.invalidCity, $("#fr_addressScrollTarget"));
        checkField(mainRequester.state, mainRequester.invalidState, $("#fr_addressScrollTarget"));
        checkField(mainRequester.postalCode, mainRequester.invalidPostalCode, $("#fr_addressScrollTarget"));

        // Main Required
        checkField(mainRequired.name, mainRequired.invalidName, $("#frd_infoScrollTarget"));
        checkField(mainRequired.document, mainRequired.invalidDocument, $("#frd_infoScrollTarget"));
        checkField(mainRequired.email, mainRequired.invalidEmail, $("#frd_infoScrollTarget"));
        checkField(mainRequired.phone, mainRequired.invalidPhone, $("#frd_infoScrollTarget"));
        checkField(mainRequired.street, mainRequired.invalidStreet, $("#frd_addressScrollTarget"));
        checkField(mainRequired.number, mainRequired.invalidNumber, $("#frd_addressScrollTarget"));
        checkField(mainRequired.district, mainRequired.invalidDistrict, $("#frd_addressScrollTarget"));
        checkField(mainRequired.city, mainRequired.invalidCity, $("#frd_addressScrollTarget"));
        checkField(mainRequired.state, mainRequired.invalidState, $("#frd_addressScrollTarget"));
        checkField(mainRequired.postalCode, mainRequired.invalidPostalCode, $("#frd_addressScrollTarget"));

        // Case Relato & Request
        checkField(formInputs.report, formInputs.invalidReport, $("#reportScrollTarget"));
        checkField(formInputs.request, formInputs.invalidRequest, $("#requestScrollTarget"));

        if ($("#check").is(":checked")) {
            checkField(formInputs.anticipationCause, formInputs.invalidAnticipationCause, $("#check"));
        }

        // Cause values
        if (isNaN(getNumericValue("#valueTree")) || getNumericValue("#valueTree") === 0) {
            formInputs.invalidValueTree.removeClass("hidden");
            if (!alreadyScrolled) {
                $("html, body").animate({ scrollTop: $("#causeScrollTarget").offset().top - 150 }, 800);
                alreadyScrolled = true;
            }
            isValid = false;
        } else {
            formInputs.invalidValueTree.addClass("hidden");
        }

        // Second Requester
        if (checkboxes.firstRequesterCheck.is(":checked")) {
            checkField(secondRequester.name, secondRequester.invalidName, $("#sr_infoFieldDisplayTarget"));
            checkField(secondRequester.document, secondRequester.invalidDocument, $("#sr_infoFieldDisplayTarget"));
            checkField(secondRequester.email, secondRequester.invalidEmail, $("#sr_infoFieldDisplayTarget"));
            checkField(secondRequester.phone, secondRequester.invalidPhone, $("#sr_infoFieldDisplayTarget"));
            checkField(secondRequester.street, secondRequester.invalidStreet, $("#sr_addressFieldDisplayTarget"));
            checkField(secondRequester.number, secondRequester.invalidNumber, $("#sr_addressFieldDisplayTarget"));
            checkField(secondRequester.district, secondRequester.invalidDistrict, $("#sr_addressFieldDisplayTarget"));
            checkField(secondRequester.city, secondRequester.invalidCity, $("#sr_addressFieldDisplayTarget"));
            checkField(secondRequester.state, secondRequester.invalidState, $("#sr_addressFieldDisplayTarget"));
            checkField(secondRequester.postalCode, secondRequester.invalidPostalCode, $("#sr_addressFieldDisplayTarget"));
            secondRequesterExist = true;
        }

        // Third Requester
        if (checkboxes.secondRequesterCheck.is(":checked")) {
            checkField(thirdRequester.name, thirdRequester.invalidName, $("#tr_infoFieldDisplayTarget"));
            checkField(thirdRequester.document, thirdRequester.invalidDocument, $("#tr_infoFieldDisplayTarget"));
            checkField(thirdRequester.email, thirdRequester.invalidEmail, $("#tr_infoFieldDisplayTarget"));
            checkField(thirdRequester.phone, thirdRequester.invalidPhone, $("#tr_infoFieldDisplayTarget"));
            checkField(thirdRequester.street, thirdRequester.invalidStreet, $("#tr_addressFieldDisplayTarget"));
            checkField(thirdRequester.number, thirdRequester.invalidNumber, $("#tr_addressFieldDisplayTarget"));
            checkField(thirdRequester.district, thirdRequester.invalidDistrict, $("#tr_addressFieldDisplayTarget"));
            checkField(thirdRequester.city, thirdRequester.invalidCity, $("#tr_addressFieldDisplayTarget"));
            checkField(thirdRequester.state, thirdRequester.invalidState, $("#tr_addressFieldDisplayTarget"));
            checkField(thirdRequester.postalCode, thirdRequester.invalidPostalCode, $("#tr_addressFieldDisplayTarget"));
            thirdRequesterExist = true;
        }

        // Second Required
        if (checkboxes.firstRequiredCheck.is(":checked")) {
            checkField(secondRequired.name, secondRequired.invalidName, $("#srd_infoFieldDisplayTarget"));
            checkField(secondRequired.document, secondRequired.invalidDocument, $("#srd_infoFieldDisplayTarget"));
            checkField(secondRequired.email, secondRequired.invalidEmail, $("#srd_infoFieldDisplayTarget"));
            checkField(secondRequired.phone, secondRequired.invalidPhone, $("#srd_infoFieldDisplayTarget"));
            checkField(secondRequired.street, secondRequired.invalidStreet, $("#srd_addressScrollTarget"));
            checkField(secondRequired.number, secondRequired.invalidNumber, $("#srd_addressScrollTarget"));
            checkField(secondRequired.district, secondRequired.invalidDistrict, $("#srd_addressScrollTarget"));
            checkField(secondRequired.city, secondRequired.invalidCity, $("#srd_addressScrollTarget"));
            checkField(secondRequired.state, secondRequired.invalidState, $("#srd_addressScrollTarget"));
            checkField(secondRequired.postalCode, secondRequired.invalidPostalCode, $("#srd_addressScrollTarget"));
            secondRequiredExist = true;
        }

        // Third Required
        if (checkboxes.secondRequiredCheck.is(":checked")) {
            checkField(thirdRequired.name, thirdRequired.invalidName, $("#trd_infoFieldDisplayTarget"));
            checkField(thirdRequired.document, thirdRequired.invalidDocument, $("#trd_infoFieldDisplayTarget"));
            checkField(thirdRequired.email, thirdRequired.invalidEmail, $("#trd_infoFieldDisplayTarget"));
            checkField(thirdRequired.phone, thirdRequired.invalidPhone, $("#trd_infoFieldDisplayTarget"));
            checkField(thirdRequired.street, thirdRequired.invalidStreet, $("#trd_addressScrollTarget"));
            checkField(thirdRequired.number, thirdRequired.invalidNumber, $("#trd_addressScrollTarget"));
            checkField(thirdRequired.district, thirdRequired.invalidDistrict, $("#trd_addressScrollTarget"));
            checkField(thirdRequired.city, thirdRequired.invalidCity, $("#trd_addressScrollTarget"));
            checkField(thirdRequired.state, thirdRequired.invalidState, $("#trd_addressScrollTarget"));
            checkField(thirdRequired.postalCode, thirdRequired.invalidPostalCode, $("#trd_addressScrollTarget"));
            thirdRequiredExist = true;
        }

        return {
            isValid,
            secondRequesterExist,
            secondRequiredExist,
            thirdRequesterExist,
            thirdRequiredExist
        };
    }

    function getNumericValue(selector) {
        const value = $(selector).val();
        if (!value) return 0;
        return parseFloat(value.replace("R$", "").replace(/\./g, "").replace(",", "."));
    }

    function formatBRL(value) {
        return new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(value);
    }

    // Money Masks
    $("#valueOne").maskMoney({ prefix: "R$ ", allowNegative: true, thousands: ".", decimal: ",", affixesStay: true });
    $("#valueTwo").maskMoney({ prefix: "R$ ", allowNegative: true, thousands: ".", decimal: ",", affixesStay: true });

    function updateSum() {
        const val1 = getNumericValue("#valueOne") || 0;
        const val2 = getNumericValue("#valueTwo") || 0;
        $("#valueTree").val(formatBRL(val1 + val2));
    }

    $("#valueOne, #valueTwo").on("change", updateSum);

    // Adaptador de Storage Local Genérico
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

    function compileEntryData(R, N, q, formValidation) {
        return {
            id: Date.now(),
            date: R + " " + N,
            requesterName: mainRequester.name.val().toUpperCase(),
            requiredName: mainRequired.name.val().toUpperCase(),
            causeValue: formInputs.valueTree.val(),
            rawData: {
                headerDate: R,
                headerTime: N,
                fullTextDate: q,
                hasAnticipation: $("#check").is(":checked"),
                anticipationText: formInputs.anticipationCause.val(),
                report: formInputs.report.val(),
                requestText: formInputs.request.val(),
                valueOne: formInputs.valueOne.val(),
                valueTwo: formInputs.valueTwo.val(),
                valueThree: formInputs.valueTree.val(),
                req1: {
                    name: mainRequester.name.val(),
                    document: mainRequester.document.val(),
                    email: mainRequester.email.val(),
                    phone: mainRequester.phone.val(),
                    street: mainRequester.street.val(),
                    number: mainRequester.number.val(),
                    district: mainRequester.district.val(),
                    city: mainRequester.city.val(),
                    state: mainRequester.state.val(),
                    postalCode: mainRequester.postalCode.val()
                },
                req2: formValidation.secondRequesterExist ? {
                    name: secondRequester.name.val(),
                    document: secondRequester.document.val(),
                    email: secondRequester.email.val(),
                    phone: secondRequester.phone.val(),
                    street: secondRequester.street.val(),
                    number: secondRequester.number.val(),
                    district: secondRequester.district.val(),
                    city: secondRequester.city.val(),
                    state: secondRequester.state.val(),
                    postalCode: secondRequester.postalCode.val()
                } : null,
                req3: formValidation.thirdRequesterExist ? {
                    name: thirdRequester.name.val(),
                    document: thirdRequester.document.val(),
                    email: thirdRequester.email.val(),
                    phone: thirdRequester.phone.val(),
                    street: thirdRequester.street.val(),
                    number: thirdRequester.number.val(),
                    district: thirdRequester.district.val(),
                    city: thirdRequester.city.val(),
                    state: thirdRequester.state.val(),
                    postalCode: thirdRequester.postalCode.val()
                } : null,
                reqd1: {
                    name: mainRequired.name.val(),
                    document: mainRequired.document.val(),
                    email: mainRequired.email.val(),
                    phone: mainRequired.phone.val(),
                    street: mainRequired.street.val(),
                    number: mainRequired.number.val(),
                    district: mainRequired.district.val(),
                    city: mainRequired.city.val(),
                    state: mainRequired.state.val(),
                    postalCode: mainRequired.postalCode.val()
                },
                reqd2: formValidation.secondRequiredExist ? {
                    name: secondRequired.name.val(),
                    document: secondRequired.document.val(),
                    email: secondRequired.email.val(),
                    phone: secondRequired.phone.val(),
                    street: secondRequired.street.val(),
                    number: secondRequired.number.val(),
                    district: secondRequired.district.val(),
                    city: secondRequired.city.val(),
                    state: secondRequired.state.val(),
                    postalCode: secondRequired.postalCode.val()
                } : null,
                reqd3: formValidation.thirdRequiredExist ? {
                    name: thirdRequired.name.val(),
                    document: thirdRequired.document.val(),
                    email: thirdRequired.email.val(),
                    phone: thirdRequired.phone.val(),
                    street: thirdRequired.street.val(),
                    number: thirdRequired.number.val(),
                    district: thirdRequired.district.val(),
                    city: thirdRequired.city.val(),
                    state: thirdRequired.state.val(),
                    postalCode: thirdRequired.postalCode.val()
                } : null,
                attachedFiles: {
                    idDoc: attachedFiles.idDoc,
                    residenceDoc: attachedFiles.residenceDoc,
                    claimDocs: attachedFiles.claimDocs
                }
            }
        };
    }

    // 4. Action Handlers
    let currentR = "", currentN = "", currentQ = "";

    $("#saveBtn").on("click", () => {
        const formValidation = validateForm();

        if (formValidation.isValid) {
            const dateObj = new Date();
            const d = dateObj.getDate();
            const m = dateObj.getMonth(); // 0-indexed
            const yyyy = dateObj.getFullYear();
            const min = dateObj.getMinutes();
            const hr = dateObj.getHours();

            const formattedDay = d < 10 ? "0" + d : d;
            const formattedMonth = (m + 1) < 10 ? "0" + (m + 1) : (m + 1);
            currentR = formattedDay + "/" + formattedMonth + "/" + yyyy;
            currentQ = `Itapoá (SC), ${formattedDay} de ${["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"][m]} de ${yyyy}.`;
            currentN = (hr < 10 ? "0" + hr : hr) + ":" + (min < 10 ? "0" + min : min);

            // Fill doc1
            doc1Requester.name.text(mainRequester.name.val().toUpperCase());
            doc1Requester.address.text("R: " + mainRequester.street.val().toUpperCase() + " N: " + mainRequester.number.val() + " " + mainRequester.city.val().toUpperCase() + "/" + mainRequester.state.val().toUpperCase() + " CEP: " + mainRequester.postalCode.val());
            doc1Requester.document.text(mainRequester.document.val());
            doc1Requester.email.text(mainRequester.email.val());
            doc1Requester.phone.text(mainRequester.phone.val());

            doc1General.firstSignerName.text(mainRequester.name.val().toUpperCase());
            doc1General.firstSignerDocument.text(mainRequester.document.val());

            // Fill Term 1
            firstTerm.headerDate.text(currentR);
            firstTerm.headerTime.text(currentN);
            firstTerm.name.text(mainRequester.name.val().toUpperCase());
            firstTerm.document.text(mainRequester.document.val());
            firstTerm.street.text(mainRequester.street.val().toUpperCase());
            firstTerm.number.text(mainRequester.number.val());
            firstTerm.district.text(mainRequester.district.val().toUpperCase());
            firstTerm.cityState.text(mainRequester.city.val() + "/" + mainRequester.state.val());
            firstTerm.postalCode.text(mainRequester.postalCode.val());
            firstTerm.phone.text(mainRequester.phone.val());
            firstTerm.email.text(mainRequester.email.val());
            firstTerm.fullDate.text(currentQ);
            firstTerm.signerName.text(mainRequester.name.val());

            // Handle optional second requester
            if (formValidation.secondRequesterExist) {
                doc1SecondRequester.name.text(secondRequester.name.val().toUpperCase());
                doc1SecondRequester.display.removeClass("hidden");
                doc1SecondRequester.address.text("R: " + secondRequester.street.val().toUpperCase() + " N: " + secondRequester.number.val() + " " + secondRequester.city.val().toUpperCase() + "/" + secondRequester.state.val().toUpperCase() + " CEP: " + secondRequester.postalCode.val());
                doc1SecondRequester.document.text(secondRequester.document.val());
                doc1SecondRequester.email.text(secondRequester.email.val());
                doc1SecondRequester.phone.text(secondRequester.phone.val());

                displays.secondSignerDisplay.removeClass("hidden");
                doc1General.secondSignerName.text(secondRequester.name.val().toUpperCase());
                doc1General.secondSignerDocument.text(secondRequester.document.val());

                // Fill Term 2
                secondTerm.headerDate.text(currentR);
                secondTerm.headerTime.text(currentN);
                secondTerm.name.text(secondRequester.name.val().toUpperCase());
                secondTerm.document.text(secondRequester.document.val());
                secondTerm.street.text(secondRequester.street.val().toUpperCase());
                secondTerm.number.text(secondRequester.number.val());
                secondTerm.district.text(secondRequester.district.val().toUpperCase());
                secondTerm.cityState.text(secondRequester.city.val() + "/" + secondRequester.state.val());
                secondTerm.postalCode.text(secondRequester.postalCode.val());
                secondTerm.phone.text(secondRequester.phone.val());
                secondTerm.email.text(secondRequester.email.val());
                secondTerm.fullDate.text(currentQ);
                secondTerm.signerName.text(secondRequester.name.val());
            }

            // Handle optional third requester
            if (formValidation.thirdRequesterExist) {
                doc1ThirdRequester.name.text(thirdRequester.name.val().toUpperCase());
                doc1ThirdRequester.display.removeClass("hidden");
                doc1ThirdRequester.address.text("R: " + thirdRequester.street.val().toUpperCase() + " N: " + thirdRequester.number.val() + " " + thirdRequester.city.val().toUpperCase() + "/" + thirdRequester.state.val().toUpperCase() + " CEP: " + thirdRequester.postalCode.val());
                doc1ThirdRequester.document.text(thirdRequester.document.val());
                doc1ThirdRequester.email.text(thirdRequester.email.val());
                doc1ThirdRequester.phone.text(thirdRequester.phone.val());

                displays.thirdSignerDisplay.removeClass("hidden");
                doc1General.thirdSignerName.text(thirdRequester.name.val().toUpperCase());
                doc1General.thirdSignerDocument.text(thirdRequester.document.val());

                // Fill Term 3
                thirdTerm.headerDate.text(currentR);
                thirdTerm.headerTime.text(currentN);
                thirdTerm.name.text(thirdRequester.name.val().toUpperCase());
                thirdTerm.document.text(thirdRequester.document.val());
                thirdTerm.street.text(thirdRequester.street.val().toUpperCase());
                thirdTerm.number.text(thirdRequester.number.val());
                thirdTerm.district.text(thirdRequester.district.val().toUpperCase());
                thirdTerm.cityState.text(thirdRequester.city.val() + "/" + thirdRequester.state.val());
                thirdTerm.postalCode.text(thirdRequester.postalCode.val());
                thirdTerm.phone.text(thirdRequester.phone.val());
                thirdTerm.email.text(thirdRequester.email.val());
                thirdTerm.fullDate.text(currentQ);
                thirdTerm.signerName.text(thirdRequester.name.val());
            }

            // Fill required 1
            doc1Required.name.text(mainRequired.name.val().toUpperCase());
            doc1Required.address.text("R: " + mainRequired.street.val().toUpperCase() + " N: " + mainRequired.number.val() + " " + mainRequired.city.val().toUpperCase() + "/" + mainRequired.state.val().toUpperCase() + " CEP: " + mainRequired.postalCode.val());
            doc1Required.document.text(mainRequired.document.val());
            doc1Required.email.text(mainRequired.email.val());
            doc1Required.phone.text(mainRequired.phone.val());

            // Handle optional second required
            if (formValidation.secondRequiredExist) {
                doc1SecondRequired.name.text(secondRequired.name.val().toUpperCase());
                doc1SecondRequired.display.removeClass("hidden");
                doc1SecondRequired.address.text("R: " + secondRequired.street.val().toUpperCase() + " N: " + secondRequired.number.val() + " " + secondRequired.city.val().toUpperCase() + "/" + secondRequired.state.val().toUpperCase() + " CEP: " + secondRequired.postalCode.val());
                doc1SecondRequired.document.text(secondRequired.document.val());
                doc1SecondRequired.email.text(secondRequired.email.val());
                doc1SecondRequired.phone.text(secondRequired.phone.val());
            }

            // Handle optional third required
            if (formValidation.thirdRequiredExist) {
                doc1ThirdRequired.name.text(thirdRequired.name.val().toUpperCase());
                doc1ThirdRequired.display.removeClass("hidden");
                doc1ThirdRequired.address.text("R: " + thirdRequired.street.val().toUpperCase() + " N: " + thirdRequired.number.val() + " " + thirdRequired.city.val().toUpperCase() + "/" + thirdRequired.state.val().toUpperCase() + " CEP: " + thirdRequired.postalCode.val());
                doc1ThirdRequired.document.text(thirdRequired.document.val());
                doc1ThirdRequired.email.text(thirdRequired.email.val());
                doc1ThirdRequired.phone.text(thirdRequired.phone.val());
            }

            // Text relato, request, values
            doc1General.report.text(formInputs.report.val());
            doc1General.requestText.text(formInputs.request.val());
            doc1General.firstValue.text(formInputs.valueOne.val());
            doc1General.secondValue.text(formInputs.valueTwo.val());
            doc1General.thirdValue.text(formInputs.valueTree.val());
            doc1General.date.text(currentQ);
            doc1General.headerDate.text(currentR);
            doc1General.headerTime.text(currentN);

            if ($("#check").is(":checked")) {
                doc1General.anticipationTopDisplay.removeClass("hidden");
                doc1General.anticipationTextDisplay.removeClass("hidden");
                doc1General.anticipationText.text(formInputs.anticipationCause.val());
            }

            // Render Attached Documents dynamically for printing
            const printContainer = $("#attachedDocsPrintContainer");
            printContainer.empty();

            function appendPrintPage(title, dataUrl) {
                if (!dataUrl) return;
                if (dataUrl.startsWith("data:application/pdf")) return;
                const pageHtml = `
                    <div class="attached-doc-page">
                        <div class="doc2-header">
                            <div class="doc2-header-address-box">
                                <p class="doc2-header-address">
                                    Rua Mariana Michels Borges, 776 - Bairro: Itapema do Norte - CEP: 89249-000 - Fone: (47)3443-8000 - Email: itapoa.vara1@tjsc.jus.br
                                </p>
                            </div>
                        </div>
                        <h1 class="doc2-title" style="margin-top: 20px; margin-bottom: 20px; font-size: 1.25rem;">DOCUMENTOS</h1>
                        <h3 class="doc2-title2" style="text-align: center; margin-bottom: 15px;">${title}</h3>
                        <div class="doc2-body" style="text-align: center; padding: 10px;">
                            <img src="${dataUrl}" style="max-width: 100%; max-height: 800px; object-fit: contain; border: 1.5px solid var(--color-border); border-radius: 8px; padding: 6px;">
                        </div>
                    </div>
                `;
                printContainer.append(pageHtml);
            }

            if (attachedFiles.idDoc && attachedFiles.idDoc.length > 0) {
                attachedFiles.idDoc.forEach((docDataUrl, index) => {
                    appendPrintPage(`Documento de Identificação - Parte ${index + 1}`, docDataUrl);
                });
            }
            if (attachedFiles.residenceDoc && attachedFiles.residenceDoc.length > 0) {
                attachedFiles.residenceDoc.forEach((docDataUrl, index) => {
                    appendPrintPage(`Comprovante de Residência - Parte ${index + 1}`, docDataUrl);
                });
            }
            attachedFiles.claimDocs.forEach((docDataUrl, index) => {
                appendPrintPage(`Documento de Comprovação da Reclamação - Parte ${index + 1}`, docDataUrl);
            });

            // Open the decision modal
            $("#decisionModal").removeClass("hidden");
        }
    });

    // Modal Events
    let editingId = null;

    storage.get(["jecEditId", "jecFormDraft"], (res) => {
        const editId = res.jecEditId;
        if (editId) {
            editingId = editId;
            storage.set({ jecEditId: null }, () => {
                loadEntryForEditing(editId);
            });
        } else if (res.jecFormDraft) {
            restoreFormFromDraft(res.jecFormDraft);
        }
    });

    function loadEntryForEditing(editId) {
        storage.get("jecHistory", (data) => {
            const history = data.jecHistory || [];
            const entry = history.find(item => item.id === editId);
            if (!entry) return;

            const raw = entry.rawData;

            // Restaura Reclamante 1
            mainRequester.name.val(raw.req1.name);
            mainRequester.document.val(raw.req1.document);
            mainRequester.email.val(raw.req1.email);
            mainRequester.phone.val(raw.req1.phone);
            mainRequester.street.val(raw.req1.street);
            mainRequester.number.val(raw.req1.number);
            mainRequester.district.val(raw.req1.district);
            mainRequester.city.val(raw.req1.city);
            mainRequester.state.val(raw.req1.state);
            mainRequester.postalCode.val(raw.req1.postalCode);

            // Restaura Reclamante 2
            if (raw.req2) {
                checkboxes.firstRequesterCheck.prop("checked", true).trigger("change");
                secondRequester.name.val(raw.req2.name);
                secondRequester.document.val(raw.req2.document);
                secondRequester.email.val(raw.req2.email);
                secondRequester.phone.val(raw.req2.phone);
                secondRequester.street.val(raw.req2.street);
                secondRequester.number.val(raw.req2.number);
                secondRequester.district.val(raw.req2.district);
                secondRequester.city.val(raw.req2.city);
                secondRequester.state.val(raw.req2.state);
                secondRequester.postalCode.val(raw.req2.postalCode);
            }

            // Restaura Reclamante 3
            if (raw.req3) {
                checkboxes.secondRequesterCheck.prop("checked", true).trigger("change");
                thirdRequester.name.val(raw.req3.name);
                thirdRequester.document.val(raw.req3.document);
                thirdRequester.email.val(raw.req3.email);
                thirdRequester.phone.val(raw.req3.phone);
                thirdRequester.street.val(raw.req3.street);
                thirdRequester.number.val(raw.req3.number);
                thirdRequester.district.val(raw.req3.district);
                thirdRequester.city.val(raw.req3.city);
                thirdRequester.state.val(raw.req3.state);
                thirdRequester.postalCode.val(raw.req3.postalCode);
            }

            // Restaura Reclamado 1
            mainRequired.name.val(raw.reqd1.name);
            mainRequired.document.val(raw.reqd1.document);
            mainRequired.email.val(raw.reqd1.email);
            mainRequired.phone.val(raw.reqd1.phone);
            mainRequired.street.val(raw.reqd1.street);
            mainRequired.number.val(raw.reqd1.number);
            mainRequired.district.val(raw.reqd1.district);
            mainRequired.city.val(raw.reqd1.city);
            mainRequired.state.val(raw.reqd1.state);
            mainRequired.postalCode.val(raw.reqd1.postalCode);

            // Restaura Reclamado 2
            if (raw.reqd2) {
                checkboxes.firstRequiredCheck.prop("checked", true).trigger("change");
                secondRequired.name.val(raw.reqd2.name);
                secondRequired.document.val(raw.reqd2.document);
                secondRequired.email.val(raw.reqd2.email);
                secondRequired.phone.val(raw.reqd2.phone);
                secondRequired.street.val(raw.reqd2.street);
                secondRequired.number.val(raw.reqd2.number);
                secondRequired.district.val(raw.reqd2.district);
                secondRequired.city.val(raw.reqd2.city);
                secondRequired.state.val(raw.reqd2.state);
                secondRequired.postalCode.val(raw.reqd2.postalCode);
            }

            // Restaura Reclamado 3
            if (raw.reqd3) {
                checkboxes.secondRequiredCheck.prop("checked", true).trigger("change");
                thirdRequired.name.val(raw.reqd3.name);
                thirdRequired.document.val(raw.reqd3.document);
                thirdRequired.email.val(raw.reqd3.email);
                thirdRequired.phone.val(raw.reqd3.phone);
                thirdRequired.street.val(raw.reqd3.street);
                thirdRequired.number.val(raw.reqd3.number);
                thirdRequired.district.val(raw.reqd3.district);
                thirdRequired.city.val(raw.reqd3.city);
                thirdRequired.state.val(raw.reqd3.state);
                thirdRequired.postalCode.val(raw.reqd3.postalCode);
            }

            // Restaura relato, pedidos e valores
            formInputs.report.val(raw.report);
            formInputs.request.val(raw.requestText);
            formInputs.valueOne.val(raw.valueOne);
            formInputs.valueTwo.val(raw.valueTwo);
            formInputs.valueTree.val(raw.valueThree);

            if (raw.hasAnticipation) {
                $("#check").prop("checked", true).trigger("change");
                formInputs.anticipationCause.val(raw.anticipationText);
            }

            // Restaura arquivos anexos
            if (raw.attachedFiles) {
                if (raw.attachedFiles.idDoc) {
                    attachedFiles.idDoc = Array.isArray(raw.attachedFiles.idDoc) ? [...raw.attachedFiles.idDoc] : [raw.attachedFiles.idDoc];
                    renderMultiPreview("idDoc");
                }
                if (raw.attachedFiles.residenceDoc) {
                    attachedFiles.residenceDoc = Array.isArray(raw.attachedFiles.residenceDoc) ? [...raw.attachedFiles.residenceDoc] : [raw.attachedFiles.residenceDoc];
                    renderMultiPreview("residenceDoc");
                }
                if (raw.attachedFiles.claimDocs && raw.attachedFiles.claimDocs.length > 0) {
                    attachedFiles.claimDocs = [...raw.attachedFiles.claimDocs];
                    renderMultiPreview("claimDocs");
                }
            }
        });
    }

    function restoreFormFromDraft(draft) {
        if (!draft) return;
        
        if (draft.editingId) {
            editingId = draft.editingId;
        }

        // Restaura Reclamante 1
        if (draft.req1) {
            mainRequester.name.val(draft.req1.name);
            mainRequester.document.val(draft.req1.document);
            mainRequester.email.val(draft.req1.email);
            mainRequester.phone.val(draft.req1.phone);
            mainRequester.street.val(draft.req1.street);
            mainRequester.number.val(draft.req1.number);
            mainRequester.district.val(draft.req1.district);
            mainRequester.city.val(draft.req1.city);
            mainRequester.state.val(draft.req1.state);
            mainRequester.postalCode.val(draft.req1.postalCode);
            if (draft.req1.check) {
                checkboxes.firstRequesterCheck.prop("checked", true).trigger("change");
            }
        }

        // Restaura Reclamante 2
        if (draft.req2) {
            secondRequester.name.val(draft.req2.name);
            secondRequester.document.val(draft.req2.document);
            secondRequester.email.val(draft.req2.email);
            secondRequester.phone.val(draft.req2.phone);
            secondRequester.street.val(draft.req2.street);
            secondRequester.number.val(draft.req2.number);
            secondRequester.district.val(draft.req2.district);
            secondRequester.city.val(draft.req2.city);
            secondRequester.state.val(draft.req2.state);
            secondRequester.postalCode.val(draft.req2.postalCode);
            if (draft.req2.check) {
                checkboxes.secondRequesterCheck.prop("checked", true).trigger("change");
            }
        }

        // Restaura Reclamante 3
        if (draft.req3) {
            thirdRequester.name.val(draft.req3.name);
            thirdRequester.document.val(draft.req3.document);
            thirdRequester.email.val(draft.req3.email);
            thirdRequester.phone.val(draft.req3.phone);
            thirdRequester.street.val(draft.req3.street);
            thirdRequester.number.val(draft.req3.number);
            thirdRequester.district.val(draft.req3.district);
            thirdRequester.city.val(draft.req3.city);
            thirdRequester.state.val(draft.req3.state);
            thirdRequester.postalCode.val(draft.req3.postalCode);
        }

        // Restaura Reclamado 1
        if (draft.reqd1) {
            mainRequired.name.val(draft.reqd1.name);
            mainRequired.document.val(draft.reqd1.document);
            mainRequired.email.val(draft.reqd1.email);
            mainRequired.phone.val(draft.reqd1.phone);
            mainRequired.street.val(draft.reqd1.street);
            mainRequired.number.val(draft.reqd1.number);
            mainRequired.district.val(draft.reqd1.district);
            mainRequired.city.val(draft.reqd1.city);
            mainRequired.state.val(draft.reqd1.state);
            mainRequired.postalCode.val(draft.reqd1.postalCode);
            if (draft.reqd1.check) {
                checkboxes.firstRequiredCheck.prop("checked", true).trigger("change");
            }
        }

        // Restaura Reclamado 2
        if (draft.reqd2) {
            secondRequired.name.val(draft.reqd2.name);
            secondRequired.document.val(draft.reqd2.document);
            secondRequired.email.val(draft.reqd2.email);
            secondRequired.phone.val(draft.reqd2.phone);
            secondRequired.street.val(draft.reqd2.street);
            secondRequired.number.val(draft.reqd2.number);
            secondRequired.district.val(draft.reqd2.district);
            secondRequired.city.val(draft.reqd2.city);
            secondRequired.state.val(draft.reqd2.state);
            secondRequired.postalCode.val(draft.reqd2.postalCode);
            if (draft.reqd2.check) {
                checkboxes.secondRequiredCheck.prop("checked", true).trigger("change");
            }
        }

        // Restaura Reclamado 3
        if (draft.reqd3) {
            thirdRequired.name.val(draft.reqd3.name);
            thirdRequired.document.val(draft.reqd3.document);
            thirdRequired.email.val(draft.reqd3.email);
            thirdRequired.phone.val(draft.reqd3.phone);
            thirdRequired.street.val(draft.reqd3.street);
            thirdRequired.number.val(draft.reqd3.number);
            thirdRequired.district.val(draft.reqd3.district);
            thirdRequired.city.val(draft.reqd3.city);
            thirdRequired.state.val(draft.reqd3.state);
            thirdRequired.postalCode.val(draft.reqd3.postalCode);
        }

        // Restaura relato, pedidos e valores
        formInputs.report.val(draft.report);
        formInputs.request.val(draft.request);
        formInputs.valueOne.val(draft.valueOne);
        formInputs.valueTwo.val(draft.valueTwo);
        formInputs.valueTree.val(draft.valueThree);

        if (draft.checkAnticipation) {
            $("#check").prop("checked", true).trigger("change");
            formInputs.anticipationCause.val(draft.anticipationText);
        }

        // Restaura arquivos anexos
        if (draft.attachedFiles) {
            if (draft.attachedFiles.idDoc) {
                attachedFiles.idDoc = Array.isArray(draft.attachedFiles.idDoc) ? [...draft.attachedFiles.idDoc] : [draft.attachedFiles.idDoc];
                renderMultiPreview("idDoc");
            }
            if (draft.attachedFiles.residenceDoc) {
                attachedFiles.residenceDoc = Array.isArray(draft.attachedFiles.residenceDoc) ? [...draft.attachedFiles.residenceDoc] : [draft.attachedFiles.residenceDoc];
                renderMultiPreview("residenceDoc");
            }
            if (draft.attachedFiles.claimDocs && draft.attachedFiles.claimDocs.length > 0) {
                attachedFiles.claimDocs = [...draft.attachedFiles.claimDocs];
                renderMultiPreview("claimDocs");
            }
        }
    }

    function debounce(func, wait) {
        let timeout;
        return function(...args) {
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(this, args), wait);
        };
    }

    const saveFormDraft = debounce(() => {
        const draftData = {
            editingId: editingId,
            req1: {
                name: mainRequester.name.val(),
                document: mainRequester.document.val(),
                email: mainRequester.email.val(),
                phone: mainRequester.phone.val(),
                street: mainRequester.street.val(),
                number: mainRequester.number.val(),
                district: mainRequester.district.val(),
                city: mainRequester.city.val(),
                state: mainRequester.state.val(),
                postalCode: mainRequester.postalCode.val(),
                check: checkboxes.firstRequesterCheck.is(":checked")
            },
            req2: {
                name: secondRequester.name.val(),
                document: secondRequester.document.val(),
                email: secondRequester.email.val(),
                phone: secondRequester.phone.val(),
                street: secondRequester.street.val(),
                number: secondRequester.number.val(),
                district: secondRequester.district.val(),
                city: secondRequester.city.val(),
                state: secondRequester.state.val(),
                postalCode: secondRequester.postalCode.val(),
                check: checkboxes.secondRequesterCheck.is(":checked")
            },
            req3: {
                name: thirdRequester.name.val(),
                document: thirdRequester.document.val(),
                email: thirdRequester.email.val(),
                phone: thirdRequester.phone.val(),
                street: thirdRequester.street.val(),
                number: thirdRequester.number.val(),
                district: thirdRequester.district.val(),
                city: thirdRequester.city.val(),
                state: thirdRequester.state.val(),
                postalCode: thirdRequester.postalCode.val()
            },
            reqd1: {
                name: mainRequired.name.val(),
                document: mainRequired.document.val(),
                email: mainRequired.email.val(),
                phone: mainRequired.phone.val(),
                street: mainRequired.street.val(),
                number: mainRequired.number.val(),
                district: mainRequired.district.val(),
                city: mainRequired.city.val(),
                state: mainRequired.state.val(),
                postalCode: mainRequired.postalCode.val(),
                check: checkboxes.firstRequiredCheck.is(":checked")
            },
            reqd2: {
                name: secondRequired.name.val(),
                document: secondRequired.document.val(),
                email: secondRequired.email.val(),
                phone: secondRequired.phone.val(),
                street: secondRequired.street.val(),
                number: secondRequired.number.val(),
                district: secondRequired.district.val(),
                city: secondRequired.city.val(),
                state: secondRequired.state.val(),
                postalCode: secondRequired.postalCode.val(),
                check: checkboxes.secondRequiredCheck.is(":checked")
            },
            reqd3: {
                name: thirdRequired.name.val(),
                document: thirdRequired.document.val(),
                email: thirdRequired.email.val(),
                phone: thirdRequired.phone.val(),
                street: thirdRequired.street.val(),
                number: thirdRequired.number.val(),
                district: thirdRequired.district.val(),
                city: thirdRequired.city.val(),
                state: thirdRequired.state.val(),
                postalCode: thirdRequired.postalCode.val()
            },
            report: formInputs.report.val(),
            request: formInputs.request.val(),
            anticipationText: formInputs.anticipationCause.val(),
            checkAnticipation: $("#check").is(":checked"),
            valueOne: formInputs.valueOne.val(),
            valueTwo: formInputs.valueTwo.val(),
            valueThree: formInputs.valueTree.val(),
            attachedFiles: {
                idDoc: attachedFiles.idDoc,
                residenceDoc: attachedFiles.residenceDoc,
                claimDocs: attachedFiles.claimDocs
            }
        };
        storage.set({ jecFormDraft: draftData });
    }, 1000);

    $(document).on("input change", "input, textarea, select", () => {
        saveFormDraft();
    });

    let pendingAction = null;

    $("#modalCancel").on("click", () => {
        $("#decisionModal").addClass("hidden");
    });

    $("#modalInstCancel").on("click", () => {
        $("#instructionsModal").addClass("hidden");
        $("#decisionModal").removeClass("hidden");
        pendingAction = null;
    });

    $("#modalInstConfirm").on("click", async () => {
        if (pendingAction) {
            $("#instructionsModal").addClass("hidden");
            window.onbeforeunload = null; // Disable exit warning
            await pendingAction();
        }
    });

    $("#modalGovSignConfirm").on("click", () => {
        $("#govSignConfirmModal").addClass("hidden");
        window.open("https://www.gov.br/pt-br/servicos/assinatura-eletronica", "_blank");
        editingId = null;
        resetForm();
        window.location.href = "./history.html";
    });

    $("#modalGovSignCancel").on("click", () => {
        $("#govSignConfirmModal").addClass("hidden");
        editingId = null;
        resetForm();
        window.location.href = "./history.html";
    });

    $("#modalSavePdf").on("click", async () => {
        $("#decisionModal").addClass("hidden");
        const formValidation = validateForm();
        const entryData = compileEntryData(currentR, currentN, currentQ, formValidation);

        try {
            // Gerar PDF em memória para calcular as páginas
            const doc = await generatePDFProgrammatically(entryData.rawData);
            const pageInfo = doc.pageInfo;

            // Montar instruções de Salvar PDF
            $("#instructionsTitle").text("Orientações para Envio do PDF");
            const instructionsHTML = `
                <div class="instruction-box" style="display: flex; flex-direction: column; gap: 14px; font-family: var(--font-body); font-size: 0.95rem; color: var(--color-text-main); line-height: 1.5;">
                    <div style="display: flex; gap: 10px; align-items: flex-start;">
                        <span style="background-color: var(--color-accent); color: white; border-radius: 50%; width: 24px; height: 24px; display: inline-flex; align-items: center; justify-content: center; font-weight: bold; flex-shrink: 0;">1</span>
                        <span>Ao prosseguir, a petição e todos os anexos serão compilados e o arquivo <strong>Atermacao_JEC_${entryData.requesterName.replace(/\s+/g, "_")}.pdf</strong> (total de <strong>${pageInfo.totalPages}</strong> página(s)) será baixado em sua pasta de Downloads.</span>
                    </div>
                    <div style="display: flex; gap: 10px; align-items: flex-start;">
                        <span style="background-color: var(--color-accent); color: white; border-radius: 50%; width: 24px; height: 24px; display: inline-flex; align-items: center; justify-content: center; font-weight: bold; flex-shrink: 0;">2</span>
                        <div style="display: flex; flex-direction: column; align-items: flex-start; gap: 8px; width: 100%;">
                            <span>Acesse o portal de assinaturas do <strong>GOV.BR</strong> (ou outro meio de assinatura digital de sua preferência) e realize a assinatura eletrônica do arquivo PDF baixado.</span>
                            <a href="https://www.gov.br/pt-br/servicos/assinatura-eletronica" target="_blank" class="cronos-modal-btn cronos-modal-btn-secondary" style="text-decoration: none; display: inline-flex; padding: 6px 14px; font-size: 0.85rem; gap: 6px; margin-top: 4px;">
                                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                                    <path d="M3 20h18"></path>
                                </svg>
                                <span>Acessar Assinador GOV.BR</span>
                            </a>
                        </div>
                    </div>
                    <div style="display: flex; gap: 10px; align-items: flex-start;">
                        <span style="background-color: var(--color-accent); color: white; border-radius: 50%; width: 24px; height: 24px; display: inline-flex; align-items: center; justify-content: center; font-weight: bold; flex-shrink: 0;">3</span>
                        <span>Após assinar, envie o documento assinado por e-mail para a distribuição cível de Itapoá: <strong style="color: var(--color-primary); text-decoration: underline;">itapoa.distribuicao@tjsc.jus.br</strong>.</span>
                    </div>
                </div>
            `;
            $("#instructionsBody").html(instructionsHTML);

            pendingAction = async () => {
                storage.get("jecHistory", async (data) => {
                    const history = data.jecHistory || [];
                    
                    if (editingId) {
                        const index = history.findIndex(item => item.id === editingId);
                        if (index !== -1) {
                            entryData.id = editingId;
                            entryData.date = history[index].date; // preserva data original
                            history[index] = entryData;
                        } else {
                            history.unshift(entryData);
                        }
                    } else {
                        history.unshift(entryData);
                    }

                    storage.set({ jecHistory: history }, async () => {
                        try {
                            const filename = `Atermacao_JEC_${entryData.requesterName.replace(/\s+/g, "_")}.pdf`;
                            doc.save(filename);
                            
                            // Mostra o modal elegante de redirecionamento GOV.BR
                            setTimeout(() => {
                                $("#govSignConfirmModal").removeClass("hidden");
                            }, 500);
                        } catch (e) {
                            console.error("Erro ao gerar PDF:", e);
                            alert("Ocorreu um erro ao compilar o arquivo PDF.");
                        }
                    });
                });
            };

            $("#instructionsModal").removeClass("hidden");
        } catch (e) {
            console.error("Erro ao gerar PDF:", e);
            alert("Ocorreu um erro ao compilar o arquivo PDF.");
        }
    });

    $("#modalPrintDoc").on("click", async () => {
        $("#decisionModal").addClass("hidden");
        const formValidation = validateForm();
        const entryData = compileEntryData(currentR, currentN, currentQ, formValidation);

        try {
            // Gerar PDF em memória para calcular as páginas
            const doc = await generatePDFProgrammatically(entryData.rawData);
            const pageInfo = doc.pageInfo;
            const termPagesText = pageInfo.adhesionSignaturePages.join(', ');

            // Montar instruções de Impressão
            $("#instructionsTitle").text("Orientações para Assinatura Física");
            const instructionsHTML = `
                <div class="instruction-box" style="display: flex; flex-direction: column; gap: 14px; font-family: var(--font-body); font-size: 0.95rem; color: var(--color-text-main); line-height: 1.5;">
                    <div style="display: flex; gap: 10px; align-items: flex-start;">
                        <span style="background-color: var(--color-primary); color: white; border-radius: 50%; width: 24px; height: 24px; display: inline-flex; align-items: center; justify-content: center; font-weight: bold; flex-shrink: 0;">1</span>
                        <span>O documento completo foi gerado com sucesso (total de <strong>${pageInfo.totalPages}</strong> página(s)). A tela de impressão será aberta a seguir.</span>
                    </div>
                    <div style="display: flex; gap: 10px; align-items: flex-start;">
                        <span style="background-color: var(--color-primary); color: white; border-radius: 50%; width: 24px; height: 24px; display: inline-flex; align-items: center; justify-content: center; font-weight: bold; flex-shrink: 0;">2</span>
                        <span>Após a impressão física, as seguintes páginas <strong>devem ser assinadas obrigatoriamente</strong> pelos respectivos requerentes:</span>
                    </div>
                    <div style="margin-left: 34px; display: flex; flex-direction: column; gap: 8px;">
                        <div style="display: flex; align-items: center; gap: 8px;">
                            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="var(--color-accent)" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                            <span><strong>Petição de Atermação:</strong> assinar na página <strong>${pageInfo.atermacaoSignaturePage}</strong>.</span>
                        </div>
                        <div style="display: flex; align-items: center; gap: 8px;">
                            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="var(--color-accent)" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                            <span><strong>Termo de Adesão ao WhatsApp:</strong> assinar na(s) página(s) <strong>${termPagesText}</strong>.</span>
                        </div>
                    </div>
                </div>
            `;
            $("#instructionsBody").html(instructionsHTML);

            pendingAction = async () => {
                storage.get("jecHistory", async (data) => {
                    const history = data.jecHistory || [];
                    
                    if (editingId) {
                        const index = history.findIndex(item => item.id === editingId);
                        if (index !== -1) {
                            entryData.id = editingId;
                            entryData.date = history[index].date; // preserva data original
                            history[index] = entryData;
                        } else {
                            history.unshift(entryData);
                        }
                    } else {
                        history.unshift(entryData);
                    }

                    storage.set({ jecHistory: history }, async () => {
                        try {
                            doc.autoPrint();
                            
                            // Somente em caso de sucesso limpa o formulário e redireciona
                            editingId = null;
                            resetForm();
                            window.location.href = "./history.html";
                        } catch (e) {
                            console.error("Erro ao imprimir PDF:", e);
                            alert("Ocorreu um erro ao imprimir o arquivo.");
                        }
                    });
                });
            };

            $("#instructionsModal").removeClass("hidden");
        } catch (e) {
            console.error("Erro ao gerar PDF:", e);
            alert("Ocorreu um erro ao compilar o arquivo PDF.");
        }
    });

    function resetForm() {
        // Clear draft
        storage.set({ jecFormDraft: null });

        // Clear all text and numeric inputs
        $("input[type='text'], input[type='number'], textarea").val("");
        $("select").val("0");
        $("input[type='checkbox']").prop("checked", false);

        // Clear files inputs
        $("#file_idDoc").val("");
        $("#file_residenceDoc").val("");
        $("#file_claimDocs").val("");

        // Reset file state
        attachedFiles = {
            idDoc: [],
            residenceDoc: [],
            claimDocs: []
        };

        // Reset preview containers
        $("#preview_idDoc").empty().addClass("hidden");
        $("#preview_residenceDoc").empty().addClass("hidden");
        $("#preview_claimDocs").empty().addClass("hidden");
        $("#attachedDocsPrintContainer").empty();

        // Reset displays
        displays.secondRequesterInfoDisplay.addClass("hidden");
        displays.secondRequesterAddressDisplay.addClass("hidden");
        displays.thirdRequesterInfoDisplay.addClass("hidden");
        displays.thirdRequesterAddressDisplay.addClass("hidden");
        displays.secondRequiredInfoDisplay.addClass("hidden");
        displays.secondRequiredAddressDisplay.addClass("hidden");
        displays.thirdRequiredInfoDisplay.addClass("hidden");
        displays.thirdRequiredAddressDisplay.addClass("hidden");
        displays.secondSignerDisplay.addClass("hidden");
        displays.thirdSignerDisplay.addClass("hidden");
        $("#anticipationTextBox").addClass("hidden");

        // Hide generated document views
        $("#doc1").addClass("hidden");
        firstTerm.display.addClass("hidden");
        secondTerm.display.addClass("hidden");
        thirdTerm.display.addClass("hidden");

        // Show main page containers
        $("#pageMain").removeClass("hidden");
        $("#pageFooter").removeClass("hidden");

        // Scroll back to top
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    // Toggle sections based on inputs
    $("#check").on("change", () => {
        if ($("#check").is(":checked")) {
            $("#anticipationTextBox").removeClass("hidden");
        } else {
            $("#anticipationTextBox").addClass("hidden");
        }
    });

    checkboxes.firstRequesterCheck.on("change", () => {
        if (checkboxes.firstRequesterCheck.is(":checked")) {
            displays.secondRequesterInfoDisplay.removeClass("hidden");
            displays.secondRequesterAddressDisplay.removeClass("hidden");
        } else {
            displays.secondRequesterInfoDisplay.addClass("hidden");
            displays.secondRequesterAddressDisplay.addClass("hidden");
            displays.thirdRequesterInfoDisplay.addClass("hidden");
            displays.thirdRequesterAddressDisplay.addClass("hidden");
            checkboxes.secondRequesterCheck.prop("checked", false);
        }
    });

    checkboxes.secondRequesterCheck.on("change", () => {
        if (checkboxes.secondRequesterCheck.is(":checked")) {
            displays.thirdRequesterInfoDisplay.removeClass("hidden");
            displays.thirdRequesterAddressDisplay.removeClass("hidden");
        } else {
            displays.thirdRequesterInfoDisplay.addClass("hidden");
            displays.thirdRequesterAddressDisplay.addClass("hidden");
        }
    });

    checkboxes.firstRequiredCheck.on("change", () => {
        if (checkboxes.firstRequiredCheck.is(":checked")) {
            displays.secondRequiredInfoDisplay.removeClass("hidden");
            displays.secondRequiredAddressDisplay.removeClass("hidden");
        } else {
            displays.secondRequiredInfoDisplay.addClass("hidden");
            displays.secondRequiredAddressDisplay.addClass("hidden");
            displays.thirdRequiredInfoDisplay.addClass("hidden");
            displays.thirdRequiredAddressDisplay.addClass("hidden");
            checkboxes.secondRequiredCheck.prop("checked", false);
        }
    });

    checkboxes.secondRequiredCheck.on("change", () => {
        if (checkboxes.secondRequiredCheck.is(":checked")) {
            displays.thirdRequiredInfoDisplay.removeClass("hidden");
            displays.thirdRequiredAddressDisplay.removeClass("hidden");
        } else {
            displays.thirdRequiredInfoDisplay.addClass("hidden");
            displays.thirdRequiredAddressDisplay.addClass("hidden");
        }
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

    // Floating Help Popups logic (Hover and Click)
    const helpContainers = $(".help-popup-container");

    helpContainers.each(function() {
        const container = $(this);
        const btn = container.find(".btn-help-icon");
        const content = container.find(".help-popup-content");

        // Hover events
        btn.on("mouseenter", function() {
            if (!content.hasClass("clicked-open")) {
                content.removeClass("hidden");
                btn.addClass("active");
            }
        });

        btn.on("mouseleave", function() {
            if (!content.hasClass("clicked-open")) {
                content.addClass("hidden");
                btn.removeClass("active");
            }
        });

        // Click event to toggle sticky state
        btn.on("click", function(e) {
            e.stopPropagation(); // Prevent closing immediately via document click

            const isCurrentlySticky = content.hasClass("clicked-open");

            // Close all other popups
            $(".help-popup-content").removeClass("clicked-open").addClass("hidden");
            $(".btn-help-icon").removeClass("active");

            if (!isCurrentlySticky) {
                content.addClass("clicked-open").removeClass("hidden");
                btn.addClass("active");
            } else {
                content.removeClass("clicked-open").addClass("hidden");
                btn.removeClass("active");
            }
        });
    });

    // Close any clicked-open popup when clicking anywhere outside
    $(document).on("click", function(e) {
        if (!$(e.target).closest(".help-popup-container").length) {
            $(".help-popup-content").removeClass("clicked-open").addClass("hidden");
            $(".btn-help-icon").removeClass("active");
        }
    });

    // Cronos Assistant Floating Button & Modal logic
    const assistantBtn = $("#cronosAssistantBtn");
    const assistantModal = $("#cronosAssistantModal");
    const closeAssistantBtn = $("#closeAssistantModalBtn");
    const closeAssistantOkBtn = $("#closeAssistantModalOkBtn");

    assistantBtn.on("click", () => {
        assistantModal.removeClass("hidden");
        // Open the first accordion item by default
        $(".accordion-item").removeClass("active");
        $(".accordion-item").first().addClass("active");
    });

    function closeAssistant() {
        assistantModal.addClass("hidden");
    }

    closeAssistantBtn.on("click", closeAssistant);
    closeAssistantOkBtn.on("click", closeAssistant);

    // Close when clicking outside the modal box
    assistantModal.on("click", (e) => {
        if ($(e.target).is(assistantModal)) {
            closeAssistant();
        }
    });

    // Accordion toggle inside Cronos Assistant modal
    $(".accordion-header").on("click", function() {
        const currentItem = $(this).closest(".accordion-item");
        const isCurrentlyActive = currentItem.hasClass("active");

        // Close all items
        $(".accordion-item").removeClass("active");

        // Open if not active before
        if (!isCurrentlyActive) {
            currentItem.addClass("active");
        }
    });
});