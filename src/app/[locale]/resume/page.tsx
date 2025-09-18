import { useTranslations } from "next-intl"

const ResumePage = () => {
  const t = useTranslations("pdf")
  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">{t("mine")}</h1>
        
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <iframe
            src="/assets/cv.pdf"
            className="w-full h-screen"
            title="Resume PDF"
            style={{ minHeight: '80vh' }}
          />
        </div>
        
        <div className="text-center mt-4">
          <a
            href="/assets/cv.pdf"
            download="resume.pdf"
            className="inline-flex items-center px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
           {t("download")}
          </a>
        </div>
      </div>
    </div>
  )
}

export default ResumePage