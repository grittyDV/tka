{/* Services Section */}
<section id="szakterületek" className="py-16 bg-slate-50">
  <div className="container mx-auto px-6">
    <h2 className="text-3xl font-bold text-center mb-12">
      {t('services.title')} {/* Add translation for the title */}
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {t('services.items', { returnObjects: true }).map((service, index) => (
        <ServiceCard key={index} service={service} />
      ))}
    </div>
  </div>
</section>