function Terms(props) {
  var siteInfo = props.data.siteInfo

  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-3xl font-extrabold mb-6">شروط الخدمة</h1>
      <div className="space-y-4 text-mist leading-8">
        <p>باستخدامك لموقع {siteInfo ? siteInfo.name : 'عدسة'} فإنك توافق على الشروط التالية.</p>
        <p>محتوى المدونة مخصص للأغراض التعليمية والإلهامية، ولا يجوز إعادة نشره دون إذن.</p>
        <p>نحتفظ بحق تعديل هذه الشروط في أي وقت، وسيتم إعلامك بأي تغييرات جوهرية.</p>
      </div>
    </div>
  )
}

export default Terms
