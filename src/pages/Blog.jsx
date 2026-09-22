import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import PostCard from '../components/PostCard.jsx'
import PostListItem from '../components/PostListItem.jsx'

var pageSize = 6

function Blog(props) {
  var posts = props.data.posts
  var categories = props.data.categories

  var [searchParams, setSearchParams] = useSearchParams()
  var initialCategory = searchParams.get('category') || 'all'

  var [activeCategory, setActiveCategory] = useState(initialCategory)
  var [searchTerm, setSearchTerm] = useState('')
  var [viewMode, setViewMode] = useState('grid')
  var [page, setPage] = useState(1)

  useEffect(function () {
    var urlCategory = searchParams.get('category') || 'all'
    setActiveCategory(urlCategory)
  }, [searchParams])

  var filteredPosts = useMemo(function () {
    var result = []
    var term = searchTerm.trim().toLowerCase()
    for (var i = 0; i < posts.length; i++) {
      var post = posts[i]
      var matchesCategory = activeCategory === 'all' || post.category === activeCategory
      var matchesSearch = true
      if (term !== '') {
        var haystack = (post.title + ' ' + post.excerpt).toLowerCase()
        matchesSearch = haystack.indexOf(term) !== -1
      }
      if (matchesCategory && matchesSearch) {
        result.push(post)
      }
    }
    return result
  }, [posts, activeCategory, searchTerm])

  var totalPages = Math.max(1, Math.ceil(filteredPosts.length / pageSize))
  var currentPage = Math.min(page, totalPages)
  var startIndex = (currentPage - 1) * pageSize
  var pagePosts = filteredPosts.slice(startIndex, startIndex + pageSize)

  function selectCategory(name) {
    setActiveCategory(name)
    setPage(1)
    if (name === 'all') {
      setSearchParams({})
    } else {
      setSearchParams({ category: name })
    }
  }

  function handleSearchChange(e) {
    setSearchTerm(e.target.value)
    setPage(1)
  }

  var categoryButtons = []
  categoryButtons.push(
    <button
      key="all"
      type="button"
      onClick={function () { selectCategory('all') }}
      className={'px-4 py-2 rounded-full text-sm font-semibold border transition-colors ' + (activeCategory === 'all' ? 'bg-ember text-ink border-ember' : 'border-line text-mist hover:text-white')}
    >
      جميع المقالات
    </button>
  )
  for (var i = 0; i < categories.length; i++) {
    (function (cat) {
      categoryButtons.push(
        <button
          key={cat.name}
          type="button"
          onClick={function () { selectCategory(cat.name) }}
          className={'px-4 py-2 rounded-full text-sm font-semibold border transition-colors ' + (activeCategory === cat.name ? 'bg-ember text-ink border-ember' : 'border-line text-mist hover:text-white')}
        >
          {cat.name}
        </button>
      )
    })(categories[i])
  }

  var postNodes = []
  for (var j = 0; j < pagePosts.length; j++) {
    if (viewMode === 'grid') {
      postNodes.push(<PostCard key={pagePosts[j].id} post={pagePosts[j]} categories={categories} />)
    } else {
      postNodes.push(<PostListItem key={pagePosts[j].id} post={pagePosts[j]} categories={categories} />)
    }
  }

  var pageButtons = []
  for (var p = 1; p <= totalPages; p++) {
    (function (pNum) {
      pageButtons.push(
        <button
          key={pNum}
          type="button"
          onClick={function () { setPage(pNum) }}
          className={'w-9 h-9 rounded-full text-sm font-bold transition-colors ' + (currentPage === pNum ? 'bg-ember text-ink' : 'border border-line text-mist hover:text-white')}
        >
          {pNum}
        </button>
      )
    })(p)
  }

  return (
    <div>
      <section className="bg-grid border-b border-line">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 text-center">
          <span className="inline-flex items-center gap-2 text-xs font-bold text-ember bg-ember/10 border border-ember/30 rounded-full px-4 py-1.5 mb-5">
            مدونتنا
          </span>
          <h1 className="text-4xl font-extrabold mb-4">استكشف مقالاتنا</h1>
          <p className="text-mist mb-10">اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث</p>

          <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
            {categoryButtons}
          </div>

          <div className="max-w-xl mx-auto relative">
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="ابحث في المقالات..."
              className="w-full bg-panel border border-line rounded-full px-5 py-3 text-sm outline-none focus:border-ember/60"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={function () { setViewMode('list') }}
              aria-label="عرض قائمة"
              className={'w-9 h-9 rounded-lg border flex items-center justify-center transition-colors ' + (viewMode === 'list' ? 'bg-ember border-ember text-ink' : 'border-line text-mist hover:text-white')}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="8" y1="6" x2="21" y2="6" />
                <line x1="8" y1="12" x2="21" y2="12" />
                <line x1="8" y1="18" x2="21" y2="18" />
                <circle cx="3" cy="6" r="1" />
                <circle cx="3" cy="12" r="1" />
                <circle cx="3" cy="18" r="1" />
              </svg>
            </button>
            <button
              type="button"
              onClick={function () { setViewMode('grid') }}
              aria-label="عرض شبكي"
              className={'w-9 h-9 rounded-lg border flex items-center justify-center transition-colors ' + (viewMode === 'grid' ? 'bg-ember border-ember text-ink' : 'border-line text-mist hover:text-white')}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="7" height="7" />
                <rect x="14" y="3" width="7" height="7" />
                <rect x="3" y="14" width="7" height="7" />
                <rect x="14" y="14" width="7" height="7" />
              </svg>
            </button>
          </div>
          <p className="text-sm text-mist">{'عرض ' + filteredPosts.length + ' مقالات'}</p>
        </div>

        {postNodes.length === 0 ? (
          <div className="text-center py-24 text-mist">لا توجد مقالات مطابقة لبحثك</div>
        ) : (
          <div className={viewMode === 'grid' ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6' : 'flex flex-col gap-5'}>
            {postNodes}
          </div>
        )}

        {totalPages > 1 ? (
          <div className="flex flex-col items-center gap-3 mt-14">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={function () { setPage(Math.max(1, currentPage - 1)) }}
                disabled={currentPage === 1}
                className="w-9 h-9 rounded-full border border-line text-mist hover:text-white disabled:opacity-40 flex items-center justify-center"
              >
                ‹
              </button>
              {pageButtons}
              <button
                type="button"
                onClick={function () { setPage(Math.min(totalPages, currentPage + 1)) }}
                disabled={currentPage === totalPages}
                className="w-9 h-9 rounded-full border border-line text-mist hover:text-white disabled:opacity-40 flex items-center justify-center"
              >
                ›
              </button>
            </div>
            <p className="text-xs text-mist">{'صفحة ' + currentPage + ' من ' + totalPages}</p>
          </div>
        ) : null}
      </section>
    </div>
  )
}

export default Blog
