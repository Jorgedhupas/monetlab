export interface RiskItem {

  id?: string;

  nombre?: string;

  descripcion?: string;

  probabilidad?: string;

  impacto?: string;

  criticidad?: string;

  mitigacion?: string[];

}

export interface RiskResult {

  financieros?: RiskItem[];

  legales?: RiskItem[];

  tecnologicos?: RiskItem[];

  operativos?: RiskItem[];

  comerciales?: RiskItem[];

}