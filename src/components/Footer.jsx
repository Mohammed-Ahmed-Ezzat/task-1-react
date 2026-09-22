import { Link } from 'react-router-dom'

function Footer(props) {
  var siteInfo = props.siteInfo
  var categories = props.categories
  var year = new Date().getFullYear()

  var categoryLinks = []
  for (var i = 0; i < categories.length; i++) {
    var cat = categories[i]
    categoryLinks.push(
      <li key={cat.name}>
        <Link to={'/blog?category=' + encodeURIComponent(cat.name)} className="text-mist hover:text-ember transition-colors">
          {cat.name}
        </Link>
      </li>
    )
  }

  return (
    <footer className="border-t border-line bg-panel/40 mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <h4 className="font-bold mb-4">ابقَ على اطلاع</h4>
          <p className="text-sm text-mist mb-4">اشترك للحصول على أحدث المقالات والتحديثات.</p>
          <form className="flex flex-col gap-2" onSubmit={function (e) { e.preventDefault() }}>
            <input
              type="email"
              placeholder="أدخل بريدك الإلكتروني"
              className="bg-panel-2 border border-line rounded-lg px-4 py-2.5 text-sm outline-none focus:border-ember/60"
            />
            <button type="submit" className="bg-ember hover:bg-ember-light text-ink font-bold text-sm py-2.5 rounded-lg transition-colors">
              اشترك
            </button>
          </form>
        </div>

        <div>
          <h4 className="font-bold mb-4">التصنيفات</h4>
          <ul className="space-y-2 text-sm">{categoryLinks}</ul>
        </div>

        <div>
          <h4 className="font-bold mb-4">استكشف</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="text-mist hover:text-ember transition-colors">الرئيسية</Link></li>
            <li><Link to="/blog" className="text-mist hover:text-ember transition-colors">المدونة</Link></li>
            <li><Link to="/about" className="text-mist hover:text-ember transition-colors">من نحن</Link></li>
          </ul>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-8 h-8 rounded-full bg-gradient-to-br from-ember to-ember-light flex items-center justify-center text-ink font-extrabold text-sm">ع</span>
            <span className="font-extrabold">{siteInfo ? siteInfo.name : 'عدسة'}</span>
          </div>
          <p className="text-sm text-mist mb-4">{siteInfo ? siteInfo.description : ''}</p>
          <div className="flex items-center gap-3 text-mist">
            <a
              href={siteInfo ? siteInfo.social.youtube : '#'}
              className="w-9 h-9 rounded-full bg-panel-2 border border-line flex items-center justify-center hover:text-ember hover:border-ember/50 transition-colors"
              aria-label="يوتيوب"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.5V8.5L15.8 12l-6.2 3.5Z" />
              </svg>
            </a>
            <a
              href={siteInfo ? siteInfo.social.linkedin : '#'}
              className="w-9 h-9 rounded-full bg-panel-2 border border-line flex items-center justify-center hover:text-ember hover:border-ember/50 transition-colors"
              aria-label="لينكدإن"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.9 8.4H3.3V21H6.9V8.4ZM5.1 3a2.1 2.1 0 1 0 0 4.2 2.1 2.1 0 0 0 0-4.2ZM20.7 21h-3.6v-6.5c0-1.5 0-3.5-2.1-3.5s-2.5 1.7-2.5 3.4V21H9v-12.6h3.5v1.7h.05c.5-1 1.7-2.1 3.6-2.1 3.8 0 4.55 2.5 4.55 5.8V21Z" />
              </svg>
            </a>
            <a
              href={siteInfo ? siteInfo.social.github : '#'}
              className="w-9 h-9 rounded-full bg-panel-2 border border-line flex items-center justify-center hover:text-ember hover:border-ember/50 transition-colors"
              aria-label="جيتهب"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.2-3.4-1.2-.4-1.1-1-1.4-1-1.4-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.7.4-1.1.6-1.4-2.2-.3-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.3-.5-1.3.1-2.7 0 0 .8-.3 2.8 1a9.6 9.6 0 0 1 5 0c1.9-1.3 2.8-1 2.8-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.9-2.4 4.7-4.6 5 .3.3.6.9.6 1.9v2.8c0 .3.2.6.7.5A10 10 0 0 0 12 2Z" />
              </svg>
            </a>
            <a
              href={siteInfo ? siteInfo.social.twitter : '#'}
              className="w-9 h-9 rounded-full bg-panel-2 border border-line flex items-center justify-center hover:text-ember hover:border-ember/50 transition-colors"
              aria-label="إكس"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.9 2h3.2l-7 8 8.2 12h-6.4l-5-6.6-5.8 6.6H2l7.5-8.6L1.6 2H8.2l4.5 6 6.2-6Zm-1.1 18h1.8L7.3 4H5.4L17.8 20Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-line py-5 flex flex-col sm:flex-row items-center justify-between gap-3 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-xs text-mist">
        <span>{'© ' + year + ' ' + (siteInfo ? siteInfo.name : 'عدسة') + '. صنع بكل ❤️. جميع الحقوق محفوظة.'}</span>
        <span className="flex items-center gap-5">
          <Link to="/privacy" className="hover:text-ember transition-colors">سياسة الخصوصية</Link>
          <Link to="/terms" className="hover:text-ember transition-colors">شروط الخدمة</Link>
        </span>
      </div>
    </footer>
  )
}

export default Footer
