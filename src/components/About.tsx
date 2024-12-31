import React from 'react';

const aboutContent = {
    title: "Rólam",
    paragraphs: [
      "Minden jogi ügy mögött egy ember áll, aki megoldást keres. Ha tapasztalt és elkötelezett ügyvédet keres, aki megértéssel és szakértelemmel képviseli Önt, jó helyen jár.",
      "2010-ben fejeztem be jogi tanulmányaimat a kolozsvári Babeș-Bolyai Tudományegyetem Jogi Karán. Mesteri fokozatomat Közösségi magánjog szakterületen szereztem 2011-ben, a Pécsi Tudományegyetem és a Babeș-Bolyai Tudományegyetem közös képzésének keretében.",
      "2013 óta sikeresen képviselem ügyfeleimet a Szilágy megyei Ügyvédi Kamara tagjaként.",
      "A jog iránti szenvedélyem és elkötelezettségem lehetővé tette, hogy számos sikeres ügyet vigyek végig, és megerősítsem ügyfeleim bizalmát. Hiszek abban, hogy a jogi kihívások megoldása nem csupán szakmai tudást, hanem empátiát, megértést és személyre szabott megközelítést is igényel.",
    ],
    closing: "Jogi problémájára hatékony megoldást találunk!"
  };
  
  const AboutSection = () => {
    return (
      <section id="rólam" className="py-16 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">{aboutContent.title}</h2>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="prose prose-lg max-w-none text-gray-600">
                {aboutContent.paragraphs.map((paragraph, index) => (
                  <p key={index} className="mb-6 text-lg">
                    {paragraph}
                  </p>
                ))}
                <p className="text-lg font-medium text-[#597F70]">
                  {aboutContent.closing}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default AboutSection;