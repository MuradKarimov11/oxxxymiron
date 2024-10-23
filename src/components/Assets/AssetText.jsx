
export const AssetText = ({value}) => (
    <span  dangerouslySetInnerHTML={{ __html: value.replaceAll("\n\n", "<br />") }}/>
)
