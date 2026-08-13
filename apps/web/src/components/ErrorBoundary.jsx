
import React from 'react';
import { AlertCircle, RefreshCcw } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
    this.setState({ errorInfo });
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null, errorInfo: null });
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-[100dvh] w-full flex items-center justify-center bg-background text-foreground p-4">
          <div className="max-w-md w-full bg-card border border-border rounded-2xl p-8 shadow-xl text-center space-y-6">
            <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto text-destructive">
              <AlertCircle className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-2xl font-bold mb-2">Ein Fehler ist aufgetreten</h1>
              <p className="text-muted-foreground mb-4">
                Die Anwendung konnte nicht geladen werden. Bitte versuchen Sie es erneut.
              </p>
              {this.state.error && (
                <div className="bg-muted p-4 rounded-lg text-left text-xs font-mono overflow-auto max-h-32 text-muted-foreground">
                  {this.state.error.toString()}
                </div>
              )}
            </div>
            <Button 
              onClick={this.handleReset}
              className="w-full h-12 bg-primary text-primary-foreground font-semibold hover:bg-primary/90"
            >
              <RefreshCcw className="w-4 h-4 mr-2" />
              Seite neu laden
            </Button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
