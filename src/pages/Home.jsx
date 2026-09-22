import { Link } from 'react-router-dom'
import PostCard from '../components/PostCard.jsx'

function Home(props) {
  var posts = props.data.posts
  var categories = props.data.categories

  var featured = []
  for (var i = 0; i < posts.length; i++) {
    if (posts[i].featured && featured.length < 3) {
      featured.push(posts[i])
    }
  }

  var sortedByDate = posts.slice().sort(function (a, b) {
    return new Date(b.date) - new Date(a.date)
  })
  var latest = sortedByDate.slice(0, 3)

  var authorNames = {}
  for (var j = 0; j < posts.length; j++) {
    authorNames[posts[j].author.name] = true
  }
  var writerCount = Object.keys(authorNames).length

  var featuredCards = []
  for (var k = 0; k < featured.length; k++) {
    featuredCards.push(<PostCard key={featured[k].id} post={featured[k]} categories={categories} />)
  }

  var latestCards = []
  for (var l = 0; l < latest.length; l++) {
    latestCards.push(<PostCard key={latest[l].id} post={latest[l]} categories={categories} />)
  }

  var categoryCards = []
  for (var m = 0; m < categories.length; m++) {
    var cat = categories[m]
    categoryCards.push(
      <Link
        key={cat.name}
        to={'/blog?category=' + encodeURIComponent(cat.name)}
        className="rounded-2xl border border-line bg-panel p-6 flex items-center gap-4 hover:border-ember/50 transition-colors"
      >
        <span className="w-11 h-11 rounded-xl bg-ember/15 text-ember flex items-center justify-center font-bold">
          {cat.count}
        </span>
        <div>
          <p className="font-bold">{cat.name}</p>
          <p className="text-xs text-mist">{cat.count} مقالة</p>
        </div>
      </Link>
    )
  }

  return (
    <div>
      <section className="relative bg-grid border-b border-line overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-ember/10 via-transparent to-transparent pointer-events-none" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-24 text-center">
          <span className="inline-flex items-center gap-2 text-xs font-bold text-ember bg-ember/10 border border-ember/30 rounded-full px-4 py-1.5 mb-6">
            مرحباً بك في عدسة
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-5">
            اكتشف فن <span className="text-ember">التصوير الفوتوغرافي</span>
          </h1>
          <p className="text-mist text-lg mb-8 max-w-2xl mx-auto">
            انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في التصوير.
          </p>
          <div className="flex items-center justify-center gap-3 mb-14">
            <Link to="/blog" className="bg-ember hover:bg-ember-light text-ink font-bold px-6 py-3 rounded-full transition-colors">
              استكشف المقالات
            </Link>
            <Link to="/about" className="border border-line hover:border-ember/50 font-bold px-6 py-3 rounded-full transition-colors">
              اعرف المزيد
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="rounded-xl border border-line bg-panel/70 py-5">
              <p className="text-2xl font-extrabold text-ember">{writerCount}</p>
              <p className="text-xs text-mist mt-1">كتاب</p>
            </div>
            <div className="rounded-xl border border-line bg-panel/70 py-5">
              <p className="text-2xl font-extrabold text-ember">{categories.length}</p>
              <p className="text-xs text-mist mt-1">تصنيفات</p>
            </div>
            <div className="rounded-xl border border-line bg-panel/70 py-5">
              <p className="text-2xl font-extrabold text-ember">10 آلاف+</p>
              <p className="text-xs text-mist mt-1">قارئ</p>
            </div>
            <div className="rounded-xl border border-line bg-panel/70 py-5">
              <p className="text-2xl font-extrabold text-ember">{posts.length}+</p>
              <p className="text-xs text-mist mt-1">مقالة</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex items-end justify-between mb-8">
          <div>
            <span className="text-xs font-bold text-ember">مميز</span>
            <h2 className="text-3xl font-extrabold mt-1">مقالات مختارة</h2>
          </div>
          <Link to="/blog" className="text-sm font-semibold text-ember hover:text-ember-light transition-colors">
            عرض الكل
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredCards}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20">
        <div className="mb-8">
          <span className="text-xs font-bold text-ember">التصنيفات</span>
          <h2 className="text-3xl font-extrabold mt-1">استكشف حسب الموضوع</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {categoryCards}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20">
        <div className="flex items-end justify-between mb-8">
          <div>
            <span className="text-xs font-bold text-ember">الأحدث</span>
            <h2 className="text-3xl font-extrabold mt-1">أحدث المقالات</h2>
          </div>
          <Link to="/blog" className="text-sm font-semibold text-ember hover:text-ember-light transition-colors">
            عرض جميع المقالات
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestCards}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pb-24">
        <div className="rounded-3xl bg-gradient-to-l from-ember to-ember-light text-ink p-10 sm:p-14 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-3">اشترك في نشرتنا الإخبارية</h2>
          <p className="mb-7 opacity-90">احصل على نصائح التصوير الحصرية ودروس جديدة مباشرة في بريدك الإلكتروني.</p>
          <form
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            onSubmit={function (e) { e.preventDefault() }}
          >
            <input
              type="email"
              placeholder="أدخل بريدك الإلكتروني"
              className="flex-1 rounded-full px-5 py-3 text-sm text-ink outline-none"
            />
            <button type="submit" className="bg-ink text-white font-bold px-6 py-3 rounded-full">
              اشترك الآن
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default Home
