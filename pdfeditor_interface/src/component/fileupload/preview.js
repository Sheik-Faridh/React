import React, { memo } from "react";

const Preview = memo(({file}) => {
    const fileName = file.name;
    const fileSize = (file.size/1024).toFixed(2);
    const fileExtension = file.type ? file.type.split("/")[1] : "pdf";
    return(
        <div className="file-preview">
            <div className="preview">
                <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 29 32" className="model-attachment">
                    <path fill="#ebeff3" d="M3.725.652c-.717 0-1.298.584-1.298 1.304v28.681c0 .72.581 1.304 1.298 1.304H27.09c.717 0 1.298-.584 1.298-1.304V7.545c0-.367-.154-.717-.424-.964L21.856.991a1.294 1.294 0 00-.874-.34H3.725z"></path>
                    <path fill="#b1bdc8" d="M13.893 19.602c0 .925-.767 1.676-1.715 1.676-.946 0-1.713-.751-1.713-1.676s.767-1.676 1.713-1.676c.948 0 1.715.751 1.715 1.676zm-7.619 9.063h18.578c.418 0 .669-.456.438-.797l-5.848-8.658a.533.533 0 00-.895.027l-4.12 6.99a.531.531 0 01-.826.107l-2.865-2.8a.533.533 0 00-.755.011L5.89 27.799c-.315.328-.078.866.383.866z"></path>
                    <path fill="#264966" d="M1.886 10.291l.538.395v5.285L0 13.601v-2.354a1.185 1.185 0 011.886-.956z"></path>
                    <path fill="#345c7c" d="M.593 5.6h18.015c.327 0 .593.265.593.593v6.815a.593.593 0 01-.593.593H.001V6.194c0-.327.265-.593.593-.593z"></path>
                </svg>
                <span className="extension">
                    {fileExtension}
                </span>
            </div>
            <div className="file-details">
                <div className="file-name">{fileName}</div>
                <div className="file-size">{fileSize} kb</div>
            </div>
        </div>
    )
})

export default Preview;