const advanceConfiguration = {
    disableTextSelection: true
};

/// Public
function configure() {
    const instance = PSPDFKit.Maui.MauiBridge.currentDocument;

    instance.setViewState(viewState => viewState
        .set('showToolbar', false)
        .set('enableAnnotationToolbar', false));
}

function setPen(r, g, b) {
    const instance = PSPDFKit.Maui.MauiBridge.currentDocument;

    instance.setAnnotationPresets(presets => {
        return {
            ...presets,
            ink: {
                ...presets.ink,
                strokeColor: new PSPDFKit.Color({ r: r, g: g, b: b }),
                opacity: 1,
                lineWidth: 5
            }
        };
    });

    // setting interaction mode to None to prevent a weird issue where the inking color doesn't actually change
    instance.setViewState(viewState => viewState.set('interactionMode', PSPDFKit.InteractionMode.NONE));
    instance.setCurrentAnnotationPreset('ink');
    instance.setViewState(viewState => viewState.set('interactionMode', PSPDFKit.InteractionMode.INK));
}

function setHighlighter(r, g, b) {
    const instance = PSPDFKit.Maui.MauiBridge.currentDocument;

    instance.setAnnotationPresets(presets => {
        return {
            ...presets,
            ink: {
                ...presets.ink,
                strokeColor: new PSPDFKit.Color({ r: r, g: g, b: b }),
                opacity: .5,
                lineWidth: 15
            }
        };
    });

    // setting interaction mode to None to prevent a weird issue where the inking color doesn't actually change
    instance.setViewState(viewState => viewState.set('interactionMode', PSPDFKit.InteractionMode.NONE));
    instance.setCurrentAnnotationPreset('ink');
    instance.setViewState(viewState => viewState.set('interactionMode', PSPDFKit.InteractionMode.INK));
}

function setEraser() {
    const instance = PSPDFKit.Maui.MauiBridge.currentDocument;


    instance.setAnnotationPresets(presets => {
        return {
            ...presets,
            ink: {
                ...presets.line,
                inkEraserWidth: 40
            }
        };
    });

    instance.setCurrentAnnotationPreset('ink');
    instance.setViewState(viewState =>
        viewState.set('interactionMode', PSPDFKit.InteractionMode.INK_ERASER));
}