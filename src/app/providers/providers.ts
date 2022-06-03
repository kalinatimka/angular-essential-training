import { InjectionToken } from "@angular/core"

export const lookupLists = {
	mediums: ['Movies', 'Series'],
}

export const lookupListsToken = new InjectionToken('lookupListToken');
