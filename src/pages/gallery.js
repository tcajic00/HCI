import React from "react"
import HeaderFooterLayout from "../layouts/headerFooter"
import GalleryContent from "../modules/GalleryContent"
import SeparatorBar from '../modules/SeparatorBar'
 
const PhotoGallery = () => (
    <HeaderFooterLayout activeTab="Photo Gallery">
        <SeparatorBar text="Photo Gallery"/>
        <GalleryContent />
    </HeaderFooterLayout>
)
 
export default PhotoGallery