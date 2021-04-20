import { UniqueServiceId } from './unique-id.service';

describe(UniqueServiceId.name, () => {
  it(`#${UniqueServiceId.prototype.genereteUniqueIdWithPrefix.name} should generate id when called with prefix`, () => {
    const service = new UniqueServiceId();
    const id = service.genereteUniqueIdWithPrefix('app');
    expect(id.startsWith('app-')).toBeTrue();
  });
});
