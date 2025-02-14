namespace MauiPspdfkitExample
{
    public partial class MainPage : ContentPage
    {
        int count = 0;

        public MainPage()
        {
            InitializeComponent();
        }

        private async void OnPDFViewInitialized(object sender, EventArgs e)
        {
            try
            {
                var configuration = PDFView.Controller.CreateViewerConfiguration();
                await PDFView.Controller.LoadDocumentFromAssetsAsync("sample.pdf", configuration);

                await PDFView.Controller.ExecuteJavaScriptFunctionAsync("configure", []);
            }
            catch (Exception ex)
            {
                // Handle exception.
            }
        }

        private async void OnPenClicked(object sender, EventArgs args)
        {
            await PDFView.Controller.ExecuteJavaScriptFunctionAsync(
                "setPen",
                [0, 114, 188]);
        }

        private async void OnHighlighterClicked(object sender, EventArgs args)
        {
            await PDFView.Controller.ExecuteJavaScriptFunctionAsync(
                "setHighlighter",
                [0, 114, 188]);
        }

        private async void OnEraserClicked(object sender, EventArgs args)
        {
            await PDFView.Controller.ExecuteJavaScriptFunctionAsync(
                "setEraser",
                []);
        }
    }

}
