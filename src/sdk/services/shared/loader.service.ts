import { ServiceClass } from '@/decorators';

@ServiceClass()
export class LoaderService {
    // Properties
    private FullScreenLoaderCount = 0;

    // Full Screen Loader for API requests
    private FullScreenLoader: boolean = false;
    public FullScreenLoaderMessage: string = '';

    // Getter
    get getFullScreenLoader(): boolean {
        return this.FullScreenLoader;
    }

    // Show loader
    public showFullScreenLoader(message?: string, state = true): void {
        if (state) {
            this.FullScreenLoader = true;
            this.FullScreenLoaderMessage = message ?? '';
            this.FullScreenLoaderCount++;
        }
    }

    // Hide loader
    public hideFullScreenLoader(state = true): void {
        if (state) {
            this.FullScreenLoaderCount--;
            if (this.FullScreenLoaderCount === 0) {
                this.FullScreenLoader = false;
            }
        }
    }
}
