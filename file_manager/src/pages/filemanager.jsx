import { Layout,Row } from 'antd';
import Navigation from '../components/navigation';
import Selection from '../components/selection';
import Search from '../components/search';
import AssetList from '../components/assetlist';
import styles from '../styles/filemanager.module.css';
const { Content } = Layout;

const FileManager = () => {
    return (
        <Layout>
            <Content>
                <div className={styles.fileManager}>
                    <div className={styles.browserMockup}>
                        <div className={styles.appContainer}>
                            <div className={styles.header}>File Manager</div>
                            <Row gutter={8} className={styles.fileRoute}>
                                <Navigation />
                                <Selection />
                                <Search />
                            </Row>
                            <AssetList />
                        </div>
                    </div>
                </div>
            </Content>
        </Layout>
    )
}

export default FileManager;