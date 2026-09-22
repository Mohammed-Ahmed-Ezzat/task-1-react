function Privacy(props) {
  var siteInfo = props.data.siteInfo

  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-3xl font-extrabold mb-6">سياسة الخصوصية</h1>
      <div className="space-y-4 text-mist leading-8">
        <p>نحن في {siteInfo ? siteInfo.name : 'عدسة'} نحترم خصوصيتك ونلتزم بحماية بياناتك الشخصية.</p>
        <p>لا نقوم بمشاركة بريدك الإلكتروني أو بياناتك مع أي طرف ثالث، ونستخدمها فقط لإرسال النشرة الإخبارية التي تشترك بها.</p>
        <p>لأي استفسار حول خصوصية بياناتك يمكنك التواصل معنا على {siteInfo ? siteInfo.email : ''}.</p>
      </div>
    </div>
  )
}

export default Privacy
