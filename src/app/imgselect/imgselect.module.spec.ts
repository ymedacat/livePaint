import { ImgselectModule } from './imgselect.module';

describe('ImgselectModule', () => {
  let imgselectModule: ImgselectModule;

  beforeEach(() => {
    imgselectModule = new ImgselectModule();
  });

  it('should create an instance', () => {
    expect(imgselectModule).toBeTruthy();
  });
});
