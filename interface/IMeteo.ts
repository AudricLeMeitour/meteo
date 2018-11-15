export interface IMeteo {
    name: string;
    country: string;
    latitude: string;
    longitude: string;
    elevation: string;
    sunrise: string;
    sunset: string;
}

export interface ForecastInfo {
    latitude?: any;
    longitude?: any;
    elevation: string;
}

export interface CurrentCondition {
    date: string;
    hour: string;
    tmp: number;
    wnd_spd: number;
    wnd_gust: number;
    wnd_dir: string;
    pressure: number;
    humidity: number;
    condition: string;
    condition_key: string;
    icon: string;
    icon_big: string;
}


export interface FcstDay0 {
    date: string;
    day_short: string;
    day_long: string;
    tmin: number;
    tmax: number;
    condition: string;
    condition_key: string;
    icon: string;
    icon_big: string;
    hourly_data: HourlyData;
}


export interface HourlyData2 {
    0H00: 0H002;
    1H00: 1H002;
    2H00: 2H002;
    3H00: 3H002;
    4H00: 4H002;
    5H00: 5H002;
    6H00: 6H002;
    7H00: 7H002;
    8H00: 8H002;
    9H00: 9H002;
    10H00: 10H002;
    11H00: 11H002;
    12H00: 12H002;
    13H00: 13H002;
    14H00: 14H002;
    15H00: 15H002;
    16H00: 16H002;
    17H00: 17H002;
    18H00: 18H002;
    19H00: 19H002;
    20H00: 20H002;
    21H00: 21H002;
    22H00: 22H002;
    23H00: 23H002;
}

export interface FcstDay1 {
    date: string;
    day_short: string;
    day_long: string;
    tmin: number;
    tmax: number;
    condition: string;
    condition_key: string;
    icon: string;
    icon_big: string;
    hourly_data: HourlyData2;
}

export interface 0H003 {
    ICON: string;
    CONDITION: string;
    CONDITION_KEY: string;
    TMP2m: number;
    DPT2m: number;
    WNDCHILL2m?: any;
    HUMIDEX?: any;
    RH2m: number;
    PRMSL: number;
    APCPsfc: number;
    WNDSPD10m: number;
    WNDGUST10m: number;
    WNDDIR10m: number;
    WNDDIRCARD10: string;
    ISSNOW: number;
    HCDC: string;
    MCDC: string;
    LCDC: string;
    HGT0C: number;
    KINDEX: number;
    CAPE180_0: string;
    CIN180_0: number;
}

export interface 1H003 {
    ICON: string;
    CONDITION: string;
    CONDITION_KEY: string;
    TMP2m: number;
    DPT2m: number;
    WNDCHILL2m?: any;
    HUMIDEX?: any;
    RH2m: number;
    PRMSL: number;
    APCPsfc: number;
    WNDSPD10m: number;
    WNDGUST10m: number;
    WNDDIR10m: number;
    WNDDIRCARD10: string;
    ISSNOW: number;
    HCDC: string;
    MCDC: string;
    LCDC: string;
    HGT0C: number;
    KINDEX: number;
    CAPE180_0: string;
    CIN180_0: number;
}

export interface 2H003 {
    ICON: string;
    CONDITION: string;
    CONDITION_KEY: string;
    TMP2m: number;
    DPT2m: number;
    WNDCHILL2m?: any;
    HUMIDEX?: any;
    RH2m: number;
    PRMSL: number;
    APCPsfc: number;
    WNDSPD10m: number;
    WNDGUST10m: number;
    WNDDIR10m: number;
    WNDDIRCARD10: string;
    ISSNOW: number;
    HCDC: string;
    MCDC: string;
    LCDC: string;
    HGT0C: number;
    KINDEX: number;
    CAPE180_0: string;
    CIN180_0: number;
}

export interface 3H003 {
    ICON: string;
    CONDITION: string;
    CONDITION_KEY: string;
    TMP2m: number;
    DPT2m: number;
    WNDCHILL2m?: any;
    HUMIDEX?: any;
    RH2m: number;
    PRMSL: number;
    APCPsfc: number;
    WNDSPD10m: number;
    WNDGUST10m: number;
    WNDDIR10m: number;
    WNDDIRCARD10: string;
    ISSNOW: number;
    HCDC: string;
    MCDC: string;
    LCDC: string;
    HGT0C: number;
    KINDEX: number;
    CAPE180_0: string;
    CIN180_0: number;
}

export interface 4H003 {
    ICON: string;
    CONDITION: string;
    CONDITION_KEY: string;
    TMP2m: number;
    DPT2m: number;
    WNDCHILL2m?: any;
    HUMIDEX?: any;
    RH2m: number;
    PRMSL: number;
    APCPsfc: number;
    WNDSPD10m: number;
    WNDGUST10m: number;
    WNDDIR10m: number;
    WNDDIRCARD10: string;
    ISSNOW: number;
    HCDC: string;
    MCDC: string;
    LCDC: string;
    HGT0C: number;
    KINDEX: number;
    CAPE180_0: string;
    CIN180_0: number;
}

export interface 5H003 {
    ICON: string;
    CONDITION: string;
    CONDITION_KEY: string;
    TMP2m: number;
    DPT2m: number;
    WNDCHILL2m?: any;
    HUMIDEX?: any;
    RH2m: number;
    PRMSL: number;
    APCPsfc: number;
    WNDSPD10m: number;
    WNDGUST10m: number;
    WNDDIR10m: number;
    WNDDIRCARD10: string;
    ISSNOW: number;
    HCDC: string;
    MCDC: string;
    LCDC: string;
    HGT0C: number;
    KINDEX: number;
    CAPE180_0: string;
    CIN180_0: number;
}

export interface 6H003 {
    ICON: string;
    CONDITION: string;
    CONDITION_KEY: string;
    TMP2m: number;
    DPT2m: number;
    WNDCHILL2m?: any;
    HUMIDEX?: any;
    RH2m: number;
    PRMSL: number;
    APCPsfc: number;
    WNDSPD10m: number;
    WNDGUST10m: number;
    WNDDIR10m: number;
    WNDDIRCARD10: string;
    ISSNOW: number;
    HCDC: string;
    MCDC: string;
    LCDC: string;
    HGT0C: number;
    KINDEX: number;
    CAPE180_0: string;
    CIN180_0: number;
}

export interface 7H003 {
    ICON: string;
    CONDITION: string;
    CONDITION_KEY: string;
    TMP2m: number;
    DPT2m: number;
    WNDCHILL2m?: any;
    HUMIDEX?: any;
    RH2m: number;
    PRMSL: number;
    APCPsfc: number;
    WNDSPD10m: number;
    WNDGUST10m: number;
    WNDDIR10m: number;
    WNDDIRCARD10: string;
    ISSNOW: number;
    HCDC: string;
    MCDC: string;
    LCDC: string;
    HGT0C: number;
    KINDEX: number;
    CAPE180_0: string;
    CIN180_0: number;
}

export interface 8H003 {
    ICON: string;
    CONDITION: string;
    CONDITION_KEY: string;
    TMP2m: number;
    DPT2m: number;
    WNDCHILL2m?: any;
    HUMIDEX?: any;
    RH2m: number;
    PRMSL: number;
    APCPsfc: number;
    WNDSPD10m: number;
    WNDGUST10m: number;
    WNDDIR10m: number;
    WNDDIRCARD10: string;
    ISSNOW: number;
    HCDC: string;
    MCDC: string;
    LCDC: string;
    HGT0C: number;
    KINDEX: number;
    CAPE180_0: string;
    CIN180_0: number;
}

export interface 9H003 {
    ICON: string;
    CONDITION: string;
    CONDITION_KEY: string;
    TMP2m: number;
    DPT2m: number;
    WNDCHILL2m?: any;
    HUMIDEX?: any;
    RH2m: number;
    PRMSL: number;
    APCPsfc: number;
    WNDSPD10m: number;
    WNDGUST10m: number;
    WNDDIR10m: number;
    WNDDIRCARD10: string;
    ISSNOW: number;
    HCDC: string;
    MCDC: string;
    LCDC: string;
    HGT0C: number;
    KINDEX: number;
    CAPE180_0: string;
    CIN180_0: number;
}

export interface 10H003 {
    ICON: string;
    CONDITION: string;
    CONDITION_KEY: string;
    TMP2m: number;
    DPT2m: number;
    WNDCHILL2m?: any;
    HUMIDEX?: any;
    RH2m: number;
    PRMSL: number;
    APCPsfc: number;
    WNDSPD10m: number;
    WNDGUST10m: number;
    WNDDIR10m: number;
    WNDDIRCARD10: string;
    ISSNOW: number;
    HCDC: string;
    MCDC: string;
    LCDC: string;
    HGT0C: number;
    KINDEX: number;
    CAPE180_0: string;
    CIN180_0: number;
}

export interface 11H003 {
    ICON: string;
    CONDITION: string;
    CONDITION_KEY: string;
    TMP2m: number;
    DPT2m: number;
    WNDCHILL2m?: any;
    HUMIDEX?: any;
    RH2m: number;
    PRMSL: number;
    APCPsfc: number;
    WNDSPD10m: number;
    WNDGUST10m: number;
    WNDDIR10m: number;
    WNDDIRCARD10: string;
    ISSNOW: number;
    HCDC: string;
    MCDC: string;
    LCDC: string;
    HGT0C: number;
    KINDEX: number;
    CAPE180_0: string;
    CIN180_0: number;
}

export interface 12H003 {
    ICON: string;
    CONDITION: string;
    CONDITION_KEY: string;
    TMP2m: number;
    DPT2m: number;
    WNDCHILL2m?: any;
    HUMIDEX?: any;
    RH2m: number;
    PRMSL: number;
    APCPsfc: number;
    WNDSPD10m: number;
    WNDGUST10m: number;
    WNDDIR10m: number;
    WNDDIRCARD10: string;
    ISSNOW: number;
    HCDC: string;
    MCDC: string;
    LCDC: string;
    HGT0C: number;
    KINDEX: number;
    CAPE180_0: string;
    CIN180_0: number;
}

export interface 13H003 {
    ICON: string;
    CONDITION: string;
    CONDITION_KEY: string;
    TMP2m: number;
    DPT2m: number;
    WNDCHILL2m?: any;
    HUMIDEX?: any;
    RH2m: number;
    PRMSL: number;
    APCPsfc: number;
    WNDSPD10m: number;
    WNDGUST10m: number;
    WNDDIR10m: number;
    WNDDIRCARD10: string;
    ISSNOW: number;
    HCDC: string;
    MCDC: string;
    LCDC: string;
    HGT0C: number;
    KINDEX: number;
    CAPE180_0: string;
    CIN180_0: number;
}

export interface 14H003 {
    ICON: string;
    CONDITION: string;
    CONDITION_KEY: string;
    TMP2m: number;
    DPT2m: number;
    WNDCHILL2m?: any;
    HUMIDEX: number;
    RH2m: number;
    PRMSL: number;
    APCPsfc: number;
    WNDSPD10m: number;
    WNDGUST10m: number;
    WNDDIR10m: number;
    WNDDIRCARD10: string;
    ISSNOW: number;
    HCDC: string;
    MCDC: string;
    LCDC: string;
    HGT0C: number;
    KINDEX: number;
    CAPE180_0: string;
    CIN180_0: number;
}

export interface 15H003 {
    ICON: string;
    CONDITION: string;
    CONDITION_KEY: string;
    TMP2m: number;
    DPT2m: number;
    WNDCHILL2m?: any;
    HUMIDEX: number;
    RH2m: number;
    PRMSL: number;
    APCPsfc: number;
    WNDSPD10m: number;
    WNDGUST10m: number;
    WNDDIR10m: number;
    WNDDIRCARD10: string;
    ISSNOW: number;
    HCDC: string;
    MCDC: string;
    LCDC: string;
    HGT0C: number;
    KINDEX: number;
    CAPE180_0: string;
    CIN180_0: number;
}

export interface 16H003 {
    ICON: string;
    CONDITION: string;
    CONDITION_KEY: string;
    TMP2m: number;
    DPT2m: number;
    WNDCHILL2m?: any;
    HUMIDEX: number;
    RH2m: number;
    PRMSL: number;
    APCPsfc: number;
    WNDSPD10m: number;
    WNDGUST10m: number;
    WNDDIR10m: number;
    WNDDIRCARD10: string;
    ISSNOW: number;
    HCDC: string;
    MCDC: string;
    LCDC: string;
    HGT0C: number;
    KINDEX: number;
    CAPE180_0: string;
    CIN180_0: number;
}

export interface 17H003 {
    ICON: string;
    CONDITION: string;
    CONDITION_KEY: string;
    TMP2m: number;
    DPT2m: number;
    WNDCHILL2m?: any;
    HUMIDEX: number;
    RH2m: number;
    PRMSL: number;
    APCPsfc: number;
    WNDSPD10m: number;
    WNDGUST10m: number;
    WNDDIR10m: number;
    WNDDIRCARD10: string;
    ISSNOW: number;
    HCDC: string;
    MCDC: string;
    LCDC: string;
    HGT0C: number;
    KINDEX: number;
    CAPE180_0: string;
    CIN180_0: number;
}

export interface 18H003 {
    ICON: string;
    CONDITION: string;
    CONDITION_KEY: string;
    TMP2m: number;
    DPT2m: number;
    WNDCHILL2m?: any;
    HUMIDEX: number;
    RH2m: number;
    PRMSL: number;
    APCPsfc: number;
    WNDSPD10m: number;
    WNDGUST10m: number;
    WNDDIR10m: number;
    WNDDIRCARD10: string;
    ISSNOW: number;
    HCDC: string;
    MCDC: string;
    LCDC: string;
    HGT0C: number;
    KINDEX: number;
    CAPE180_0: string;
    CIN180_0: number;
}

export interface 19H003 {
    ICON: string;
    CONDITION: string;
    CONDITION_KEY: string;
    TMP2m: number;
    DPT2m: number;
    WNDCHILL2m?: any;
    HUMIDEX?: any;
    RH2m: number;
    PRMSL: number;
    APCPsfc: number;
    WNDSPD10m: number;
    WNDGUST10m: number;
    WNDDIR10m: number;
    WNDDIRCARD10: string;
    ISSNOW: number;
    HCDC: string;
    MCDC: string;
    LCDC: string;
    HGT0C: number;
    KINDEX: number;
    CAPE180_0: string;
    CIN180_0: number;
}

export interface 20H003 {
    ICON: string;
    CONDITION: string;
    CONDITION_KEY: string;
    TMP2m: number;
    DPT2m: number;
    WNDCHILL2m?: any;
    HUMIDEX?: any;
    RH2m: number;
    PRMSL: number;
    APCPsfc: number;
    WNDSPD10m: number;
    WNDGUST10m: number;
    WNDDIR10m: number;
    WNDDIRCARD10: string;
    ISSNOW: number;
    HCDC: string;
    MCDC: string;
    LCDC: string;
    HGT0C: number;
    KINDEX: number;
    CAPE180_0: string;
    CIN180_0: number;
}

export interface 21H003 {
    ICON: string;
    CONDITION: string;
    CONDITION_KEY: string;
    TMP2m: number;
    DPT2m: number;
    WNDCHILL2m?: any;
    HUMIDEX?: any;
    RH2m: number;
    PRMSL: number;
    APCPsfc: number;
    WNDSPD10m: number;
    WNDGUST10m: number;
    WNDDIR10m: number;
    WNDDIRCARD10: string;
    ISSNOW: number;
    HCDC: string;
    MCDC: string;
    LCDC: string;
    HGT0C: number;
    KINDEX: number;
    CAPE180_0: string;
    CIN180_0: number;
}

export interface 22H003 {
    ICON: string;
    CONDITION: string;
    CONDITION_KEY: string;
    TMP2m: number;
    DPT2m: number;
    WNDCHILL2m?: any;
    HUMIDEX?: any;
    RH2m: number;
    PRMSL: number;
    APCPsfc: number;
    WNDSPD10m: number;
    WNDGUST10m: number;
    WNDDIR10m: number;
    WNDDIRCARD10: string;
    ISSNOW: number;
    HCDC: string;
    MCDC: string;
    LCDC: string;
    HGT0C: number;
    KINDEX: number;
    CAPE180_0: string;
    CIN180_0: number;
}

export interface 23H003 {
    ICON: string;
    CONDITION: string;
    CONDITION_KEY: string;
    TMP2m: number;
    DPT2m: number;
    WNDCHILL2m?: any;
    HUMIDEX?: any;
    RH2m: number;
    PRMSL: number;
    APCPsfc: number;
    WNDSPD10m: number;
    WNDGUST10m: number;
    WNDDIR10m: number;
    WNDDIRCARD10: string;
    ISSNOW: number;
    HCDC: string;
    MCDC: string;
    LCDC: string;
    HGT0C: number;
    KINDEX: number;
    CAPE180_0: string;
    CIN180_0: number;
}

export interface HourlyData3 {
    0H00: 0H003;
    1H00: 1H003;
    2H00: 2H003;
    3H00: 3H003;
    4H00: 4H003;
    5H00: 5H003;
    6H00: 6H003;
    7H00: 7H003;
    8H00: 8H003;
    9H00: 9H003;
    10H00: 10H003;
    11H00: 11H003;
    12H00: 12H003;
    13H00: 13H003;
    14H00: 14H003;
    15H00: 15H003;
    16H00: 16H003;
    17H00: 17H003;
    18H00: 18H003;
    19H00: 19H003;
    20H00: 20H003;
    21H00: 21H003;
    22H00: 22H003;
    23H00: 23H003;
}

export interface FcstDay2 {
    date: string;
    day_short: string;
    day_long: string;
    tmin: number;
    tmax: number;
    condition: string;
    condition_key: string;
    icon: string;
    icon_big: string;
    hourly_data: HourlyData3;
}

export interface 0H004 {
    ICON: string;
    CONDITION: string;
    CONDITION_KEY: string;
    TMP2m: number;
    DPT2m: number;
    WNDCHILL2m?: any;
    HUMIDEX?: any;
    RH2m: number;
    PRMSL: number;
    APCPsfc: number;
    WNDSPD10m: number;
    WNDGUST10m: number;
    WNDDIR10m: number;
    WNDDIRCARD10: string;
    ISSNOW: number;
    HCDC: string;
    MCDC: string;
    LCDC: string;
    HGT0C: number;
    KINDEX: number;
    CAPE180_0: string;
    CIN180_0: number;
}

export interface 1H004 {
    ICON: string;
    CONDITION: string;
    CONDITION_KEY: string;
    TMP2m: number;
    DPT2m: number;
    WNDCHILL2m?: any;
    HUMIDEX?: any;
    RH2m: number;
    PRMSL: number;
    APCPsfc: number;
    WNDSPD10m: number;
    WNDGUST10m: number;
    WNDDIR10m: number;
    WNDDIRCARD10: string;
    ISSNOW: number;
    HCDC: string;
    MCDC: string;
    LCDC: string;
    HGT0C: number;
    KINDEX: number;
    CAPE180_0: string;
    CIN180_0: number;
}

export interface 2H004 {
    ICON: string;
    CONDITION: string;
    CONDITION_KEY: string;
    TMP2m: number;
    DPT2m: number;
    WNDCHILL2m?: any;
    HUMIDEX?: any;
    RH2m: number;
    PRMSL: number;
    APCPsfc: number;
    WNDSPD10m: number;
    WNDGUST10m: number;
    WNDDIR10m: number;
    WNDDIRCARD10: string;
    ISSNOW: number;
    HCDC: string;
    MCDC: string;
    LCDC: string;
    HGT0C: number;
    KINDEX: number;
    CAPE180_0: string;
    CIN180_0: number;
}

export interface 3H004 {
    ICON: string;
    CONDITION: string;
    CONDITION_KEY: string;
    TMP2m: number;
    DPT2m: number;
    WNDCHILL2m?: any;
    HUMIDEX?: any;
    RH2m: number;
    PRMSL: number;
    APCPsfc: number;
    WNDSPD10m: number;
    WNDGUST10m: number;
    WNDDIR10m: number;
    WNDDIRCARD10: string;
    ISSNOW: number;
    HCDC: string;
    MCDC: string;
    LCDC: string;
    HGT0C: number;
    KINDEX: number;
    CAPE180_0: string;
    CIN180_0: number;
}

export interface 4H004 {
    ICON: string;
    CONDITION: string;
    CONDITION_KEY: string;
    TMP2m: number;
    DPT2m: number;
    WNDCHILL2m?: any;
    HUMIDEX?: any;
    RH2m: number;
    PRMSL: number;
    APCPsfc: number;
    WNDSPD10m: number;
    WNDGUST10m: number;
    WNDDIR10m: number;
    WNDDIRCARD10: string;
    ISSNOW: number;
    HCDC: string;
    MCDC: string;
    LCDC: string;
    HGT0C: number;
    KINDEX: number;
    CAPE180_0: string;
    CIN180_0: number;
}

export interface 5H004 {
    ICON: string;
    CONDITION: string;
    CONDITION_KEY: string;
    TMP2m: number;
    DPT2m: number;
    WNDCHILL2m?: any;
    HUMIDEX?: any;
    RH2m: number;
    PRMSL: number;
    APCPsfc: number;
    WNDSPD10m: number;
    WNDGUST10m: number;
    WNDDIR10m: number;
    WNDDIRCARD10: string;
    ISSNOW: number;
    HCDC: string;
    MCDC: string;
    LCDC: string;
    HGT0C: number;
    KINDEX: number;
    CAPE180_0: string;
    CIN180_0: number;
}

export interface 6H004 {
    ICON: string;
    CONDITION: string;
    CONDITION_KEY: string;
    TMP2m: number;
    DPT2m: number;
    WNDCHILL2m?: any;
    HUMIDEX?: any;
    RH2m: number;
    PRMSL: number;
    APCPsfc: number;
    WNDSPD10m: number;
    WNDGUST10m: number;
    WNDDIR10m: number;
    WNDDIRCARD10: string;
    ISSNOW: number;
    HCDC: string;
    MCDC: string;
    LCDC: string;
    HGT0C: number;
    KINDEX: number;
    CAPE180_0: string;
    CIN180_0: number;
}

export interface 7H004 {
    ICON: string;
    CONDITION: string;
    CONDITION_KEY: string;
    TMP2m: number;
    DPT2m: number;
    WNDCHILL2m?: any;
    HUMIDEX?: any;
    RH2m: number;
    PRMSL: number;
    APCPsfc: number;
    WNDSPD10m: number;
    WNDGUST10m: number;
    WNDDIR10m: number;
    WNDDIRCARD10: string;
    ISSNOW: number;
    HCDC: string;
    MCDC: string;
    LCDC: string;
    HGT0C: number;
    KINDEX: number;
    CAPE180_0: string;
    CIN180_0: number;
}

export interface 8H004 {
    ICON: string;
    CONDITION: string;
    CONDITION_KEY: string;
    TMP2m: number;
    DPT2m: number;
    WNDCHILL2m?: any;
    HUMIDEX?: any;
    RH2m: number;
    PRMSL: number;
    APCPsfc: number;
    WNDSPD10m: number;
    WNDGUST10m: number;
    WNDDIR10m: number;
    WNDDIRCARD10: string;
    ISSNOW: number;
    HCDC: string;
    MCDC: string;
    LCDC: string;
    HGT0C: number;
    KINDEX: number;
    CAPE180_0: string;
    CIN180_0: number;
}

export interface 9H004 {
    ICON: string;
    CONDITION: string;
    CONDITION_KEY: string;
    TMP2m: number;
    DPT2m: number;
    WNDCHILL2m?: any;
    HUMIDEX?: any;
    RH2m: number;
    PRMSL: number;
    APCPsfc: number;
    WNDSPD10m: number;
    WNDGUST10m: number;
    WNDDIR10m: number;
    WNDDIRCARD10: string;
    ISSNOW: number;
    HCDC: string;
    MCDC: string;
    LCDC: string;
    HGT0C: number;
    KINDEX: number;
    CAPE180_0: string;
    CIN180_0: number;
}

export interface 10H004 {
    ICON: string;
    CONDITION: string;
    CONDITION_KEY: string;
    TMP2m: number;
    DPT2m: number;
    WNDCHILL2m?: any;
    HUMIDEX?: any;
    RH2m: number;
    PRMSL: number;
    APCPsfc: number;
    WNDSPD10m: number;
    WNDGUST10m: number;
    WNDDIR10m: number;
    WNDDIRCARD10: string;
    ISSNOW: number;
    HCDC: string;
    MCDC: string;
    LCDC: string;
    HGT0C: number;
    KINDEX: number;
    CAPE180_0: string;
    CIN180_0: number;
}

export interface 11H004 {
    ICON: string;
    CONDITION: string;
    CONDITION_KEY: string;
    TMP2m: number;
    DPT2m: number;
    WNDCHILL2m?: any;
    HUMIDEX?: any;
    RH2m: number;
    PRMSL: number;
    APCPsfc: number;
    WNDSPD10m: number;
    WNDGUST10m: number;
    WNDDIR10m: number;
    WNDDIRCARD10: string;
    ISSNOW: number;
    HCDC: string;
    MCDC: string;
    LCDC: string;
    HGT0C: number;
    KINDEX: number;
    CAPE180_0: string;
    CIN180_0: number;
}

export interface 12H004 {
    ICON: string;
    CONDITION: string;
    CONDITION_KEY: string;
    TMP2m: number;
    DPT2m: number;
    WNDCHILL2m?: any;
    HUMIDEX: number;
    RH2m: number;
    PRMSL: number;
    APCPsfc: number;
    WNDSPD10m: number;
    WNDGUST10m: number;
    WNDDIR10m: number;
    WNDDIRCARD10: string;
    ISSNOW: number;
    HCDC: string;
    MCDC: string;
    LCDC: string;
    HGT0C: number;
    KINDEX: number;
    CAPE180_0: string;
    CIN180_0: number;
}

export interface 13H004 {
    ICON: string;
    CONDITION: string;
    CONDITION_KEY: string;
    TMP2m: number;
    DPT2m: number;
    WNDCHILL2m?: any;
    HUMIDEX: number;
    RH2m: number;
    PRMSL: number;
    APCPsfc: number;
    WNDSPD10m: number;
    WNDGUST10m: number;
    WNDDIR10m: number;
    WNDDIRCARD10: string;
    ISSNOW: number;
    HCDC: string;
    MCDC: string;
    LCDC: string;
    HGT0C: number;
    KINDEX: number;
    CAPE180_0: string;
    CIN180_0: number;
}

export interface 14H004 {
    ICON: string;
    CONDITION: string;
    CONDITION_KEY: string;
    TMP2m: number;
    DPT2m: number;
    WNDCHILL2m?: any;
    HUMIDEX: number;
    RH2m: number;
    PRMSL: number;
    APCPsfc: number;
    WNDSPD10m: number;
    WNDGUST10m: number;
    WNDDIR10m: number;
    WNDDIRCARD10: string;
    ISSNOW: number;
    HCDC: string;
    MCDC: string;
    LCDC: string;
    HGT0C: number;
    KINDEX: number;
    CAPE180_0: string;
    CIN180_0: number;
}

export interface 15H004 {
    ICON: string;
    CONDITION: string;
    CONDITION_KEY: string;
    TMP2m: number;
    DPT2m: number;
    WNDCHILL2m?: any;
    HUMIDEX: number;
    RH2m: number;
    PRMSL: number;
    APCPsfc: number;
    WNDSPD10m: number;
    WNDGUST10m: number;
    WNDDIR10m: number;
    WNDDIRCARD10: string;
    ISSNOW: number;
    HCDC: string;
    MCDC: string;
    LCDC: string;
    HGT0C: number;
    KINDEX: number;
    CAPE180_0: string;
    CIN180_0: number;
}

export interface 16H004 {
    ICON: string;
    CONDITION: string;
    CONDITION_KEY: string;
    TMP2m: number;
    DPT2m: number;
    WNDCHILL2m?: any;
    HUMIDEX: number;
    RH2m: number;
    PRMSL: number;
    APCPsfc: number;
    WNDSPD10m: number;
    WNDGUST10m: number;
    WNDDIR10m: number;
    WNDDIRCARD10: string;
    ISSNOW: number;
    HCDC: string;
    MCDC: string;
    LCDC: string;
    HGT0C: number;
    KINDEX: number;
    CAPE180_0: string;
    CIN180_0: number;
}

export interface 17H004 {
    ICON: string;
    CONDITION: string;
    CONDITION_KEY: string;
    TMP2m: number;
    DPT2m: number;
    WNDCHILL2m?: any;
    HUMIDEX: number;
    RH2m: number;
    PRMSL: number;
    APCPsfc: number;
    WNDSPD10m: number;
    WNDGUST10m: number;
    WNDDIR10m: number;
    WNDDIRCARD10: string;
    ISSNOW: number;
    HCDC: string;
    MCDC: string;
    LCDC: string;
    HGT0C: number;
    KINDEX: number;
    CAPE180_0: string;
    CIN180_0: number;
}

export interface 18H004 {
    ICON: string;
    CONDITION: string;
    CONDITION_KEY: string;
    TMP2m: number;
    DPT2m: number;
    WNDCHILL2m?: any;
    HUMIDEX: number;
    RH2m: number;
    PRMSL: number;
    APCPsfc: number;
    WNDSPD10m: number;
    WNDGUST10m: number;
    WNDDIR10m: number;
    WNDDIRCARD10: string;
    ISSNOW: number;
    HCDC: string;
    MCDC: string;
    LCDC: string;
    HGT0C: number;
    KINDEX: number;
    CAPE180_0: string;
    CIN180_0: number;
}

export interface 19H004 {
    ICON: string;
    CONDITION: string;
    CONDITION_KEY: string;
    TMP2m: number;
    DPT2m: number;
    WNDCHILL2m?: any;
    HUMIDEX: number;
    RH2m: number;
    PRMSL: number;
    APCPsfc: number;
    WNDSPD10m: number;
    WNDGUST10m: number;
    WNDDIR10m: number;
    WNDDIRCARD10: string;
    ISSNOW: number;
    HCDC: string;
    MCDC: string;
    LCDC: string;
    HGT0C: number;
    KINDEX: number;
    CAPE180_0: string;
    CIN180_0: number;
}

export interface 20H004 {
    ICON: string;
    CONDITION: string;
    CONDITION_KEY: string;
    TMP2m: number;
    DPT2m: number;
    WNDCHILL2m?: any;
    HUMIDEX: number;
    RH2m: number;
    PRMSL: number;
    APCPsfc: number;
    WNDSPD10m: number;
    WNDGUST10m: number;
    WNDDIR10m: number;
    WNDDIRCARD10: string;
    ISSNOW: number;
    HCDC: string;
    MCDC: string;
    LCDC: string;
    HGT0C: number;
    KINDEX: number;
    CAPE180_0: string;
    CIN180_0: number;
}

export interface 21H004 {
    ICON: string;
    CONDITION: string;
    CONDITION_KEY: string;
    TMP2m: number;
    DPT2m: number;
    WNDCHILL2m?: any;
    HUMIDEX: number;
    RH2m: number;
    PRMSL: number;
    APCPsfc: number;
    WNDSPD10m: number;
    WNDGUST10m: number;
    WNDDIR10m: number;
    WNDDIRCARD10: string;
    ISSNOW: number;
    HCDC: string;
    MCDC: string;
    LCDC: string;
    HGT0C: number;
    KINDEX: number;
    CAPE180_0: string;
    CIN180_0: number;
}

export interface 22H004 {
    ICON: string;
    CONDITION: string;
    CONDITION_KEY: string;
    TMP2m: number;
    DPT2m: number;
    WNDCHILL2m?: any;
    HUMIDEX?: any;
    RH2m: number;
    PRMSL: number;
    APCPsfc: number;
    WNDSPD10m: number;
    WNDGUST10m: number;
    WNDDIR10m: number;
    WNDDIRCARD10: string;
    ISSNOW: number;
    HCDC: string;
    MCDC: string;
    LCDC: string;
    HGT0C: number;
    KINDEX: number;
    CAPE180_0: string;
    CIN180_0: number;
}

export interface 23H004 {
    ICON: string;
    CONDITION: string;
    CONDITION_KEY: string;
    TMP2m: number;
    DPT2m: number;
    WNDCHILL2m?: any;
    HUMIDEX?: any;
    RH2m: number;
    PRMSL: number;
    APCPsfc: number;
    WNDSPD10m: number;
    WNDGUST10m: number;
    WNDDIR10m: number;
    WNDDIRCARD10: string;
    ISSNOW: number;
    HCDC: string;
    MCDC: string;
    LCDC: string;
    HGT0C: number;
    KINDEX: number;
    CAPE180_0: string;
    CIN180_0: number;
}

export interface HourlyData4 {
    0H00: 0H004;
    1H00: 1H004;
    2H00: 2H004;
    3H00: 3H004;
    4H00: 4H004;
    5H00: 5H004;
    6H00: 6H004;
    7H00: 7H004;
    8H00: 8H004;
    9H00: 9H004;
    10H00: 10H004;
    11H00: 11H004;
    12H00: 12H004;
    13H00: 13H004;
    14H00: 14H004;
    15H00: 15H004;
    16H00: 16H004;
    17H00: 17H004;
    18H00: 18H004;
    19H00: 19H004;
    20H00: 20H004;
    21H00: 21H004;
    22H00: 22H004;
    23H00: 23H004;
}

export interface FcstDay3 {
    date: string;
    day_short: string;
    day_long: string;
    tmin: number;
    tmax: number;
    condition: string;
    condition_key: string;
    icon: string;
    icon_big: string;
    hourly_data: HourlyData4;
}

export interface 0H005 {
    ICON: string;
    CONDITION: string;
    CONDITION_KEY: string;
    TMP2m: number;
    DPT2m: number;
    WNDCHILL2m?: any;
    HUMIDEX?: any;
    RH2m: number;
    PRMSL: number;
    APCPsfc: number;
    WNDSPD10m: number;
    WNDGUST10m: number;
    WNDDIR10m: number;
    WNDDIRCARD10: string;
    ISSNOW: number;
    HCDC: string;
    MCDC: string;
    LCDC: string;
    HGT0C: number;
    KINDEX: number;
    CAPE180_0: string;
    CIN180_0: number;
}

export interface 1H005 {
    ICON: string;
    CONDITION: string;
    CONDITION_KEY: string;
    TMP2m: number;
    DPT2m: number;
    WNDCHILL2m?: any;
    HUMIDEX?: any;
    RH2m: number;
    PRMSL: number;
    APCPsfc: number;
    WNDSPD10m: number;
    WNDGUST10m: number;
    WNDDIR10m: number;
    WNDDIRCARD10: string;
    ISSNOW: number;
    HCDC: string;
    MCDC: string;
    LCDC: string;
    HGT0C: number;
    KINDEX: number;
    CAPE180_0: string;
    CIN180_0: number;
}

export interface 2H005 {
    ICON: string;
    CONDITION: string;
    CONDITION_KEY: string;
    TMP2m: number;
    DPT2m: number;
    WNDCHILL2m?: any;
    HUMIDEX?: any;
    RH2m: number;
    PRMSL: number;
    APCPsfc: number;
    WNDSPD10m: number;
    WNDGUST10m: number;
    WNDDIR10m: number;
    WNDDIRCARD10: string;
    ISSNOW: number;
    HCDC: string;
    MCDC: string;
    LCDC: string;
    HGT0C: number;
    KINDEX: number;
    CAPE180_0: string;
    CIN180_0: number;
}

export interface 3H005 {
    ICON: string;
    CONDITION: string;
    CONDITION_KEY: string;
    TMP2m: number;
    DPT2m: number;
    WNDCHILL2m?: any;
    HUMIDEX?: any;
    RH2m: number;
    PRMSL: number;
    APCPsfc: number;
    WNDSPD10m: number;
    WNDGUST10m: number;
    WNDDIR10m: number;
    WNDDIRCARD10: string;
    ISSNOW: number;
    HCDC: string;
    MCDC: string;
    LCDC: string;
    HGT0C: number;
    KINDEX: number;
    CAPE180_0: string;
    CIN180_0: number;
}

export interface 4H005 {
    ICON: string;
    CONDITION: string;
    CONDITION_KEY: string;
    TMP2m: number;
    DPT2m: number;
    WNDCHILL2m?: any;
    HUMIDEX?: any;
    RH2m: number;
    PRMSL: number;
    APCPsfc: number;
    WNDSPD10m: number;
    WNDGUST10m: number;
    WNDDIR10m: number;
    WNDDIRCARD10: string;
    ISSNOW: number;
    HCDC: string;
    MCDC: string;
    LCDC: string;
    HGT0C: number;
    KINDEX: number;
    CAPE180_0: string;
    CIN180_0: number;
}

export interface 5H005 {
    ICON: string;
    CONDITION: string;
    CONDITION_KEY: string;
    TMP2m: number;
    DPT2m: number;
    WNDCHILL2m?: any;
    HUMIDEX?: any;
    RH2m: number;
    PRMSL: number;
    APCPsfc: number;
    WNDSPD10m: number;
    WNDGUST10m: number;
    WNDDIR10m: number;
    WNDDIRCARD10: string;
    ISSNOW: number;
    HCDC: string;
    MCDC: string;
    LCDC: string;
    HGT0C: number;
    KINDEX: number;
    CAPE180_0: string;
    CIN180_0: number;
}

export interface 6H005 {
    ICON: string;
    CONDITION: string;
    CONDITION_KEY: string;
    TMP2m: number;
    DPT2m: number;
    WNDCHILL2m?: any;
    HUMIDEX?: any;
    RH2m: number;
    PRMSL: number;
    APCPsfc: number;
    WNDSPD10m: number;
    WNDGUST10m: number;
    WNDDIR10m: number;
    WNDDIRCARD10: string;
    ISSNOW: number;
    HCDC: string;
    MCDC: string;
    LCDC: string;
    HGT0C: number;
    KINDEX: number;
    CAPE180_0: string;
    CIN180_0: number;
}

export interface 7H005 {
    ICON: string;
    CONDITION: string;
    CONDITION_KEY: string;
    TMP2m: number;
    DPT2m: number;
    WNDCHILL2m?: any;
    HUMIDEX?: any;
    RH2m: number;
    PRMSL: number;
    APCPsfc: number;
    WNDSPD10m: number;
    WNDGUST10m: number;
    WNDDIR10m: number;
    WNDDIRCARD10: string;
    ISSNOW: number;
    HCDC: string;
    MCDC: string;
    LCDC: string;
    HGT0C: number;
    KINDEX: number;
    CAPE180_0: string;
    CIN180_0: number;
}

export interface 8H005 {
    ICON: string;
    CONDITION: string;
    CONDITION_KEY: string;
    TMP2m: number;
    DPT2m: number;
    WNDCHILL2m?: any;
    HUMIDEX?: any;
    RH2m: number;
    PRMSL: number;
    APCPsfc: number;
    WNDSPD10m: number;
    WNDGUST10m: number;
    WNDDIR10m: number;
    WNDDIRCARD10: string;
    ISSNOW: number;
    HCDC: string;
    MCDC: string;
    LCDC: string;
    HGT0C: number;
    KINDEX: number;
    CAPE180_0: string;
    CIN180_0: number;
}

export interface 9H005 {
    ICON: string;
    CONDITION: string;
    CONDITION_KEY: string;
    TMP2m: number;
    DPT2m: number;
    WNDCHILL2m?: any;
    HUMIDEX?: any;
    RH2m: number;
    PRMSL: number;
    APCPsfc: number;
    WNDSPD10m: number;
    WNDGUST10m: number;
    WNDDIR10m: number;
    WNDDIRCARD10: string;
    ISSNOW: number;
    HCDC: string;
    MCDC: string;
    LCDC: string;
    HGT0C: number;
    KINDEX: number;
    CAPE180_0: string;
    CIN180_0: number;
}

export interface 10H005 {
    ICON: string;
    CONDITION: string;
    CONDITION_KEY: string;
    TMP2m: number;
    DPT2m: number;
    WNDCHILL2m?: any;
    HUMIDEX?: any;
    RH2m: number;
    PRMSL: number;
    APCPsfc: number;
    WNDSPD10m: number;
    WNDGUST10m: number;
    WNDDIR10m: number;
    WNDDIRCARD10: string;
    ISSNOW: number;
    HCDC: string;
    MCDC: string;
    LCDC: string;
    HGT0C: number;
    KINDEX: number;
    CAPE180_0: string;
    CIN180_0: number;
}

export interface 11H005 {
    ICON: string;
    CONDITION: string;
    CONDITION_KEY: string;
    TMP2m: number;
    DPT2m: number;
    WNDCHILL2m?: any;
    HUMIDEX?: any;
    RH2m: number;
    PRMSL: number;
    APCPsfc: number;
    WNDSPD10m: number;
    WNDGUST10m: number;
    WNDDIR10m: number;
    WNDDIRCARD10: string;
    ISSNOW: number;
    HCDC: string;
    MCDC: string;
    LCDC: string;
    HGT0C: number;
    KINDEX: number;
    CAPE180_0: string;
    CIN180_0: number;
}

export interface 12H005 {
    ICON: string;
    CONDITION: string;
    CONDITION_KEY: string;
    TMP2m: number;
    DPT2m: number;
    WNDCHILL2m?: any;
    HUMIDEX?: any;
    RH2m: number;
    PRMSL: number;
    APCPsfc: number;
    WNDSPD10m: number;
    WNDGUST10m: number;
    WNDDIR10m: number;
    WNDDIRCARD10: string;
    ISSNOW: number;
    HCDC: string;
    MCDC: string;
    LCDC: string;
    HGT0C: number;
    KINDEX: number;
    CAPE180_0: string;
    CIN180_0: number;
}

export interface 13H005 {
    ICON: string;
    CONDITION: string;
    CONDITION_KEY: string;
    TMP2m: number;
    DPT2m: number;
    WNDCHILL2m?: any;
    HUMIDEX?: any;
    RH2m: number;
    PRMSL: number;
    APCPsfc: number;
    WNDSPD10m: number;
    WNDGUST10m: number;
    WNDDIR10m: number;
    WNDDIRCARD10: string;
    ISSNOW: number;
    HCDC: string;
    MCDC: string;
    LCDC: string;
    HGT0C: number;
    KINDEX: number;
    CAPE180_0: string;
    CIN180_0: number;
}

export interface 14H005 {
    ICON: string;
    CONDITION: string;
    CONDITION_KEY: string;
    TMP2m: number;
    DPT2m: number;
    WNDCHILL2m?: any;
    HUMIDEX?: any;
    RH2m: number;
    PRMSL: number;
    APCPsfc: number;
    WNDSPD10m: number;
    WNDGUST10m: number;
    WNDDIR10m: number;
    WNDDIRCARD10: string;
    ISSNOW: number;
    HCDC: string;
    MCDC: string;
    LCDC: string;
    HGT0C: number;
    KINDEX: number;
    CAPE180_0: string;
    CIN180_0: number;
}

export interface 15H005 {
    ICON: string;
    CONDITION: string;
    CONDITION_KEY: string;
    TMP2m: number;
    DPT2m: number;
    WNDCHILL2m?: any;
    HUMIDEX?: any;
    RH2m: number;
    PRMSL: number;
    APCPsfc: number;
    WNDSPD10m: number;
    WNDGUST10m: number;
    WNDDIR10m: number;
    WNDDIRCARD10: string;
    ISSNOW: number;
    HCDC: string;
    MCDC: string;
    LCDC: string;
    HGT0C: number;
    KINDEX: number;
    CAPE180_0: string;
    CIN180_0: number;
}

export interface 16H005 {
    ICON: string;
    CONDITION: string;
    CONDITION_KEY: string;
    TMP2m: number;
    DPT2m: number;
    WNDCHILL2m?: any;
    HUMIDEX?: any;
    RH2m: number;
    PRMSL: number;
    APCPsfc: number;
    WNDSPD10m: number;
    WNDGUST10m: number;
    WNDDIR10m: number;
    WNDDIRCARD10: string;
    ISSNOW: number;
    HCDC: string;
    MCDC: string;
    LCDC: string;
    HGT0C: number;
    KINDEX: number;
    CAPE180_0: string;
    CIN180_0: number;
}

export interface 17H005 {
    ICON: string;
    CONDITION: string;
    CONDITION_KEY: string;
    TMP2m: number;
    DPT2m: number;
    WNDCHILL2m?: any;
    HUMIDEX?: any;
    RH2m: number;
    PRMSL: number;
    APCPsfc: number;
    WNDSPD10m: number;
    WNDGUST10m: number;
    WNDDIR10m: number;
    WNDDIRCARD10: string;
    ISSNOW: number;
    HCDC: string;
    MCDC: string;
    LCDC: string;
    HGT0C: number;
    KINDEX: number;
    CAPE180_0: string;
    CIN180_0: number;
}

export interface 18H005 {
    ICON: string;
    CONDITION: string;
    CONDITION_KEY: string;
    TMP2m: number;
    DPT2m: number;
    WNDCHILL2m?: any;
    HUMIDEX?: any;
    RH2m: number;
    PRMSL: number;
    APCPsfc: number;
    WNDSPD10m: number;
    WNDGUST10m: number;
    WNDDIR10m: number;
    WNDDIRCARD10: string;
    ISSNOW: number;
    HCDC: string;
    MCDC: string;
    LCDC: string;
    HGT0C: number;
    KINDEX: number;
    CAPE180_0: string;
    CIN180_0: number;
}

export interface 19H005 {
    ICON: string;
    CONDITION: string;
    CONDITION_KEY: string;
    TMP2m: number;
    DPT2m: number;
    WNDCHILL2m?: any;
    HUMIDEX?: any;
    RH2m: number;
    PRMSL: number;
    APCPsfc: number;
    WNDSPD10m: number;
    WNDGUST10m: number;
    WNDDIR10m: number;
    WNDDIRCARD10: string;
    ISSNOW: number;
    HCDC: string;
    MCDC: string;
    LCDC: string;
    HGT0C: number;
    KINDEX: number;
    CAPE180_0: string;
    CIN180_0: number;
}

export interface 20H005 {
    ICON: string;
    CONDITION: string;
    CONDITION_KEY: string;
    TMP2m: number;
    DPT2m: number;
    WNDCHILL2m?: any;
    HUMIDEX?: any;
    RH2m: number;
    PRMSL: number;
    APCPsfc: number;
    WNDSPD10m: number;
    WNDGUST10m: number;
    WNDDIR10m: number;
    WNDDIRCARD10: string;
    ISSNOW: number;
    HCDC: string;
    MCDC: string;
    LCDC: string;
    HGT0C: number;
    KINDEX: number;
    CAPE180_0: string;
    CIN180_0: number;
}

export interface 21H005 {
    ICON: string;
    CONDITION: string;
    CONDITION_KEY: string;
    TMP2m: number;
    DPT2m: number;
    WNDCHILL2m?: any;
    HUMIDEX?: any;
    RH2m: number;
    PRMSL: number;
    APCPsfc: number;
    WNDSPD10m: number;
    WNDGUST10m: number;
    WNDDIR10m: number;
    WNDDIRCARD10: string;
    ISSNOW: number;
    HCDC: string;
    MCDC: string;
    LCDC: string;
    HGT0C: number;
    KINDEX: number;
    CAPE180_0: string;
    CIN180_0: number;
}

export interface 22H005 {
    ICON: string;
    CONDITION: string;
    CONDITION_KEY: string;
    TMP2m: number;
    DPT2m: number;
    WNDCHILL2m: number;
    HUMIDEX?: any;
    RH2m: number;
    PRMSL: number;
    APCPsfc: number;
    WNDSPD10m: number;
    WNDGUST10m: number;
    WNDDIR10m: number;
    WNDDIRCARD10: string;
    ISSNOW: number;
    HCDC: string;
    MCDC: string;
    LCDC: string;
    HGT0C: number;
    KINDEX: number;
    CAPE180_0: string;
    CIN180_0: number;
}

export interface 23H005 {
    ICON: string;
    CONDITION: string;
    CONDITION_KEY: string;
    TMP2m: number;
    DPT2m: number;
    WNDCHILL2m: number;
    HUMIDEX?: any;
    RH2m: number;
    PRMSL: number;
    APCPsfc: number;
    WNDSPD10m: number;
    WNDGUST10m: number;
    WNDDIR10m: number;
    WNDDIRCARD10: string;
    ISSNOW: number;
    HCDC: string;
    MCDC: string;
    LCDC: string;
    HGT0C: number;
    KINDEX: number;
    CAPE180_0: string;
    CIN180_0: number;
}

export interface HourlyData5 {
    0H00: 0H005;
    1H00: 1H005;
    2H00: 2H005;
    3H00: 3H005;
    4H00: 4H005;
    5H00: 5H005;
    6H00: 6H005;
    7H00: 7H005;
    8H00: 8H005;
    9H00: 9H005;
    10H00: 10H005;
    11H00: 11H005;
    12H00: 12H005;
    13H00: 13H005;
    14H00: 14H005;
    15H00: 15H005;
    16H00: 16H005;
    17H00: 17H005;
    18H00: 18H005;
    19H00: 19H005;
    20H00: 20H005;
    21H00: 21H005;
    22H00: 22H005;
    23H00: 23H005;
}

export interface FcstDay4 {
    date: string;
    day_short: string;
    day_long: string;
    tmin: number;
    tmax: number;
    condition: string;
    condition_key: string;
    icon: string;
    icon_big: string;
    hourly_data: HourlyData5;
}

export interface RootObject {
    city_info: CityInfo;
    forecast_info: ForecastInfo;
    current_condition: CurrentCondition;
    fcst_day_0: FcstDay0;
    fcst_day_1: FcstDay1;
    fcst_day_2: FcstDay2;
    fcst_day_3: FcstDay3;
    fcst_day_4: FcstDay4;
}



