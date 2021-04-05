import Icon from '@ant-design/icons';
import { FolderFilled,FileExcelOutlined,FilePptOutlined,FilePdfOutlined,FileImageOutlined,FileJpgOutlined,FileGifOutlined,FileWordOutlined,FileTextOutlined,FileZipOutlined,FileUnknownOutlined } from '@ant-design/icons';
import { ReactComponent as Html } from '../assets/svg/html.svg';
import { ReactComponent as Css } from '../assets/svg/css.svg';
import { ReactComponent as Js } from '../assets/svg/js.svg';

const HtmlOutlined = props => <Icon component={Html} {...props} />;
const CssOutlined = props => <Icon component={Css} {...props} />
const JsOutlined = props => <Icon component={Js} {...props} />

const icons = {
    '.xls': FileExcelOutlined,
    '.xlsm': FileExcelOutlined,
    '.xlsx': FileExcelOutlined,
    '.pps': FilePptOutlined,
    '.ppt': FilePptOutlined,
    '.pptx': FilePptOutlined,
    '.png': FileImageOutlined,
    '.jpeg': FileImageOutlined,
    '.jpg': FileJpgOutlined,
    '.svg': FileGifOutlined,
    '.gif': FileImageOutlined,
    '.tiff': FileImageOutlined,
    '.pdf': FilePdfOutlined,
    '.doc': FileWordOutlined,
    '.docx': FileWordOutlined,
    '.txt': FileTextOutlined,
    '.7z': FileZipOutlined,
    '.arj': FileZipOutlined,
    '.deb': FileZipOutlined,
    '.pkg': FileZipOutlined,
    '.rar': FileZipOutlined,
    '.rpm': FileZipOutlined,
    '.tar.gz': FileZipOutlined,
    '.z': FileZipOutlined,
    '.zip': FileZipOutlined,
    '.html': HtmlOutlined,
    '.xml': HtmlOutlined,
    '.css': CssOutlined,
    '.js': JsOutlined,
    'default': FileUnknownOutlined,
    'folder': FolderFilled
};

export default icons;