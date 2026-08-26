import CertificationItem from '@/components/certifications/certification-item'
import Footer from '@/components/global/footer'
import Header from '@/components/global/header'
import { certifications } from '@/lib/certifications'

export default function CertificationsPage() {
  return (
    <>
      <Header
        description='Courses, degrees and certifications'
        section='Certifications'
      />
      <hr className='my-2 text-muted' />

      <section>
        {certifications.map((cert) => (
          <CertificationItem key={cert.title} certification={cert} />
        ))}
      </section>
      <Footer />
    </>
  )
}
