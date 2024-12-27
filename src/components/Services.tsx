import React from 'react';
import { ChevronRight, Home, Users, FileText, Shield, Scale, GavelIcon, Briefcase, Building2 } from 'lucide-react';

export interface Service {
  title: string;
  mainPoints: string[];
}

export const legalServices: Service[] = [
  {
    title: 'Öröklési és Vagyonjog',
    mainPoints: [
      'Örökösödési eljárások lebonyolítása',
      'Földügyek, telekkönyvi és kataszteri hivatali ügyintézés',
      'Vagyonmegosztás és tulajdonjogi viták kezelése'
    ]
  },
  {
    title: 'Családjog',
    mainPoints: [
      'Válások és kapcsolódó jogi eljárások',
      'Gyermekelhelyezés, tartásdíj és gyereklátogatási idő megállapítása',
      'Távoltartási kérelmek és apasági perek kezelése'
    ]
  },
  {
    title: 'Kereskedelmi jog',
    mainPoints: [
      'Kereskedelmi szerződések megszerkesztése és egyeztetése',
      'Követelések behajtása és bírósági ítéletek kényszervégrehajtása',
      'Fizetési meghagyásos és csődeljárások jogi képviselete'
    ]
  },
  {
    title: 'Biztosítási jog',
    mainPoints: [
      'Biztosítási jogok védelme és érvényesítése',
      'Képviselet biztosítási vitákban',
      'Jogi tanácsadás biztosítási ügyekben'
    ]
  },
  {
    title: 'Szabálysértési jog',
    mainPoints: [
      'Szabálysértési jegyzőkönyvek elleni panaszok',
      'Képviselet bíróság előtt szabálysértési ügyekben',
      'Bírságok elleni jogorvoslatok intézése'
    ]
  },
  {
    title: 'Büntetőjog',
    mainPoints: [
      'Védelem a nyomozati és bírósági szakaszban',
      'Bűnügyi panaszok megszerkesztése és előterjesztése',
      'Jogi képviselet bűntető eljárások során'
    ]
  },
  {
    title: 'Munkajog',
    mainPoints: [
      'Munkaügyi konfliktusok rendezése',
      'Munkajogi képviselet bíróság előtt',
      'Munkaügyi megállapodások és jogviták kezelése'
    ]
  },
  {
    title: 'Közigazgatási jog',
    mainPoints: [
      'Jogi képviselet romániai intézmények előtt',
      'Peres ügyek intézése a közigazgatási törvényszéken',
      'Hatósági határozatok elleni fellebbezések'
    ]
  }
];

const serviceIcons = {
  'Öröklési és Vagyonjog': Home,
  'Családjog': Users,
  'Kereskedelmi jog': FileText,
  'Biztosítási jog': Shield,
  'Szabálysértési jog': Scale,
  'Büntetőjog': GavelIcon,
  'Munkajog': Briefcase,
  'Közigazgatási jog': Building2
} as const;