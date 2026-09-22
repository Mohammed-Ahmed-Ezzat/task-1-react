function About(props) {
  var posts = props.data.posts
  var siteInfo = props.data.siteInfo
  var categories = props.data.categories

  var seen = {}
  var writers = []
  for (var i = 0; i < posts.length; i++) {
    var author = posts[i].author
    if (!seen[author.name]) {
      seen[author.name] = true
      writers.push(author)
    }
  }

  var values = [
    { title: 'دائماً محدث', text: 'أحدث الاتجاهات وأفضل الممارسات' },
    { title: 'المجتمع', text: 'نتعلم مع أفضل المصورين' },
    { title: 'تركيز عملي', text: 'أمثلة وأفكار تطبقها في تصويرك اليوم' },
    { title: 'الجودة أولاً', text: 'محتوى مدروس ومكتوب بخبرة' }
  ]

  var valueCards = []
  for (var v = 0; v < values.length; v++) {
    valueCards.push(
      <div key={values[v].title} className="rounded-2xl border border-line bg-panel p-6 text-center">
        <p className="font-bold mb-2">{values[v].title}</p>
        <p className="text-sm text-mist">{values[v].text}</p>
      </div>
    )
  }

  var writerCards = []
  for (var w = 0; w < writers.length; w++) {
    writerCards.push(
      <div key={writers[w].name} className="rounded-2xl border border-line bg-panel p-6 text-center">
        <img src={writers[w].avatar} alt={writers[w].name} className="w-16 h-16 rounded-full object-cover mx-auto mb-4" />
        <p className="font-bold">{writers[w].name}</p>
        <p className="text-xs text-mist">{writers[w].role}</p>
      </div>
    )
  }

  return (
    <div>
      <section className="bg-grid border-b border-line">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-20 text-center">
          <span className="inline-flex items-center gap-2 text-xs font-bold text-ember bg-ember/10 border border-ember/30 rounded-full px-4 py-1.5 mb-5">
            من نحن
          </span>
          <h1 className="text-4xl font-extrabold mb-4">مهمتنا هي الإعلام والإلهام</h1>
          <p className="text-mist">{siteInfo ? siteInfo.description : ''}</p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12">
            <div className="rounded-xl border border-line bg-panel/70 py-5">
              <p className="text-2xl font-extrabold text-ember">{categories.length}</p>
              <p className="text-xs text-mist mt-1">تصنيف</p>
            </div>
            <div className="rounded-xl border border-line bg-panel/70 py-5">
              <p className="text-2xl font-extrabold text-ember">{writers.length}</p>
              <p className="text-xs text-mist mt-1">كاتب خبير</p>
            </div>
            <div className="rounded-xl border border-line bg-panel/70 py-5">
              <p className="text-2xl font-extrabold text-ember">{posts.length}+</p>
              <p className="text-xs text-mist mt-1">مقالة منشورة</p>
            </div>
            <div className="rounded-xl border border-line bg-panel/70 py-5">
              <p className="text-2xl font-extrabold text-ember">10 آلاف+</p>
              <p className="text-xs text-mist mt-1">قارئ شهرياً</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-2xl font-extrabold text-center mb-10">قيمنا</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">{valueCards}</div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pb-24">
        <h2 className="text-2xl font-extrabold text-center mb-10">تعرف على كتابنا</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">{writerCards}</div>
      </section>
    </div>
  )
}

export default About
