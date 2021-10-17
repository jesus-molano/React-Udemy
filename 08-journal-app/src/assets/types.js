// Types of actions
export const types = {
  // auth types
  login: '[Auth] Login',
  logout: '[Auth] Logout',
  // ui errors
  uiSetError: '[UI] Set Error',
  uiRemoveError: '[UI] Remove Error',
  // loading
  uiStartLoading: '[UI] Start Loading',
  uiFinishLoading: '[UI] Finish Loading',
  // notes
  notesAddEntry: '[Notes] New Entry',
  notesActive: '[Notes] Set Active Note',
  notesLoad: '[Notes] Load Notes',
  notesUpdate: '[Notes] Update Note',
  notesFileUrl: '[Notes] Updated Image Url',
  notesDelete: '[Notes] Delete Note',
  notesLogoutCleaning: '[Notes] Logout Cleaning',
};