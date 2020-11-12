import React from "react"
import HeaderFooterLayout from "../layouts/headerFooter"
import ContactSeparator from "../modules/SeparatorBar"
import ContactForm from "../modules/ContactForm"
import SeparatorBar from "../modules/SeparatorBar"
 
const ContactPage = () => (
    <HeaderFooterLayout activeTab="Contact">
        <SeparatorBar text="Contact" />
        <ContactForm />
    </HeaderFooterLayout>
)
 
export default ContactPage