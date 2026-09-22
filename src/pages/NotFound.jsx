import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className="bg-grid">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 py-32 text-center">
        <p className="text-8xl font-extrabold text-ember mb-4">404</p>
        <h1 className="text-2xl sm:text-3xl font-extrabold mb-4">الصفحة غير موجودة</h1>
        <p className="text-mist mb-10">يبدو أن الصفحة التي تبحث عنها غير موجودة أو تم نقلها.</p>
        <div className="flex items-center justify-center gap-3">
          <Link to="/" className="bg-ember hover:bg-ember-light text-ink font-bold px-6 py-3 rounded-full transition-colors">
            العودة للرئيسية
          </Link>
          <Link to="/blog" className="border border-line hover:border-ember/50 font-bold px-6 py-3 rounded-full transition-colors">
            تصفح المدونة
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound
