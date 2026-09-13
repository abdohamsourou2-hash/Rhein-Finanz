export type ServiceType = 
  | 'finanzierung' 
  | 'makler' 
  | 'absicherung' 
  | 'vermoegen';

export interface PropertyValuationFormData {
  immobilienart: string;
  wohnflaeche: string;
  grundstueck: string;
  baujahr: string;
  zustand: string;
  ausstattung: string;
  plz_ort: string;
  vorhaben: string;
  zeitrahmen: string;
  anrede: string;
  vorname: string;
  nachname: string;
  telefon: string;
  email: string;
  nachricht: string;
  datenschutz: boolean;
}

export type ActiveModal = 'impressum' | 'datenschutz' | 'agb' | 'erstinformation' | null;
