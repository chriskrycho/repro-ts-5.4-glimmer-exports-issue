import { getInternalComponentManager } from "@glimmer/manager";

class Helper {}
export const Foo = getInternalComponentManager(Helper);
