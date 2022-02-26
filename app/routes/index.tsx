import Header from "~/components/header"
import FAQ from "~/components/faq"
import Sponsors from "~/components/sponsors"
import Section from "~/components/section"
import Schedule from "~/components/schedule"

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
        <Section name="The Schedule">
          <Schedule />
        </Section>
      </div>
    </div>
  )
}