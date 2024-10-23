
export const AssetsText = ({value}) => (
    <span  dangerouslySetInnerHTML={{ __html: value.replaceAll("\n\n", "<br />") }}/>
)
