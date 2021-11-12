import type { SvelteComponent } from "svelte";

export interface NavigationItemType {
  id?: string | number;
  component: SvelteComponent;
  path: string;
}
