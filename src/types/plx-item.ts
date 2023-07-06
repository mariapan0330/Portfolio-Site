type PLXItem = {
  start: string | number;
  end?: string | number;
  duration?: string | number;
  properties: {
    startValue: number;
    endValue: number;
    unit?: string;
    property: string;
  }[];
};

export default PLXItem;
