import { servicesContent } from "../types/services";
import { Service, ServiceCard } from "./ServiceCard";

const legalServices: Service[] = [
    {
      "title": "Öröklési és Tulajdonjog",
      "mainPoints": [
        "Örökösödési eljárások lebonyolítása",
        "Földügyek, telekkönyvi és kataszteri hivatali ügyintézés",
        "Vagyonmegosztás és tulajdonjogi viták kezelése"
      ]
    },
    {
      "title": "Családjog",
      "mainPoints": [
        "Válo perek és ahhoz kapcsolódó jogi eljárások",
        "Gyermekelhelyezés, tartásdíj és gyereklátogatási idő megállapítása",
        "Távoltartási kérelmek és apasági perek kezelése"
      ]
    },
    {
      "title": "Kereskedelmi jog",
      "mainPoints": [
        "Kereskedelmi szerződések megszerkesztése és egyeztetése",
        "Követelések behajtása és bírósági ítéletek kényszervégrehajtása",
        "Fizetési meghagyásos és csődeljárások jogi képviselete"
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


  export const Services: React.FC = () => {
    return (
      <section id="szakterületek" className="py-16 bg-slate-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">{servicesContent.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {servicesContent.services.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </div>
      </section>
    );
  };
