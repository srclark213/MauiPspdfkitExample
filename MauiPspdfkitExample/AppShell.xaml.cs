namespace MauiPspdfkitExample
{
    public partial class AppShell : Shell
    {
        public AppShell()
        {
            InitializeComponent();
        }

        protected override void OnAppearing()
        {
            if (Window is null)
            {
                return;
            }

            Window.Width = 900;
            Window.MinimumWidth = 600;
            Window.MinimumHeight = 1000;
        }
    }
}
