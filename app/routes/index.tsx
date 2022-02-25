import Header from "~/components/header"
import FAQ from "~/components/faq"
import Sponsors from "~/components/sponsors"
import Section from "~/components/section"

export default function App() {
  return (
    <div className='h-screen'>
      <Header />
      <div>
        <Section name="Frequently Asked Questions">
          <FAQ />
        </Section>
        <Section name="Our Sponsors">
          <Sponsors />
        </Section>
      </div>
    </div>
  )
}