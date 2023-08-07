export interface loginPayload {
  email?: string;
  password?: string;
}

export interface CalanderEventProp {
  topTitle?: string;
  title?: string;
  image?: string;
}

export interface AppiScheProp {
  topTitle?: string;
  title?: string;
  image?: string;
  onPressEdit?: (param: any) => void;
  onPressDelete?: (param: any) => void;
}
export interface TopHeaderProp {
  title?: string;
}
