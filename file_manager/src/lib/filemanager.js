import shortid from 'shortid';
import icons from './icons';
import { prefixNumberInAssetName } from './helpers';

const isNameFound = (list,name) => list.some(asset => asset.name.toLowerCase() === name.toLowerCase());

const getAsset = (list,id) => list.find(asset => asset.id === id);

function FileManager() {}

const _proto_ = FileManager.prototype;

_proto_.getCurrentDirAssets = (assetData,id) => assetData.filter(data => data.parent_id === id)

_proto_.getParentDirAssets = (assetData,id) => {
    const dirList = [];
    if(!id) return dirList;
    let asset = getAsset(assetData,id);
    dirList.unshift(asset);
    while(asset.parent_id){
        asset = getAsset(assetData,asset.parent_id);
        dirList.unshift(asset);
    }
    return dirList;
}

_proto_.getNewNameForAsset = (assetData,parent_id,name,type) => {
    const sameLevelAsset = assetData.filter(asset => asset.parent_id === parent_id);
    if(!sameLevelAsset.length) return name;
    let keepGoing = isNameFound(sameLevelAsset,name);
    if(!keepGoing) return name;
    let i = 0, newName;
    while(keepGoing){
        i += 1;
        newName = type === 'folder' ? `${name}(${i})` : prefixNumberInAssetName(name,i);
        keepGoing = isNameFound(sameLevelAsset,newName);
    }
    return newName;
}

_proto_.generateFolderSchema = (name,parent_id = null) => ({
    id: shortid.generate(),
    name,
    type: 'folder',
    created_at: new Date().toISOString(),
    updated_at: null,
    parent_id
})

_proto_.generateFileSchema = (name,parent_id = null,file = null) => ({
    id: shortid.generate(),
    name,
    type: 'file',
    created_at: new Date().toISOString(),
    updated_at: null,
    parent_id,
    file
})

_proto_.updateAssetProp = (assetData,id,prop) => {
    const index = assetData.findIndex(asset => asset.id === id);
    assetData[index] = {...assetData[index], ...prop, updated_at: new Date().toISOString()};
    return assetData;
}

_proto_.getAllChildAssetsList = (assetData,id,listToBeDeleted = { folder: [id], file: [] }) => {
    const assetList = assetData.filter(asset => asset.parent_id === id);
    for(const asset of assetList){
        listToBeDeleted[asset.type].push(asset.id);
        _proto_.getAllChildAssetsList(assetData,asset.id,listToBeDeleted);
    }
    return listToBeDeleted;
}

_proto_.getParentDir = (assetData,id) => assetData.find(asset => asset.id === id)

_proto_.filterAssetByName = (assetData,name,parent_id) => assetData.filter(asset => asset.parent_id === parent_id).filter(asset => asset.name.toLowerCase().includes(name.toLowerCase()))

_proto_.generateListByType = (assetData,list) => {
    const res = { file: [], folder: [] };
    for(const id of list){
        const matchedData = assetData.find(asset => asset.id === id);
        matchedData.type === 'folder' ? res.folder.push(id) : res.file.push(id);
    }
    return res;
}

_proto_.getCascadingTreeView = (assetData,parent_id = null,tree = []) => {
    const filteredAsset = assetData.filter(a => a.parent_id === parent_id);
    for(const asset of filteredAsset){
        const Icon = asset.type === 'folder' 
                        ? icons.folder 
                        : asset.name.includes('.')
                            ? icons[`.${asset.name.split('.').pop()}`] || icons.default
                            : icons.default;
        const treeData = {
            title: <span className="tree-node-title"><Icon style={{ color: '#2e91d9', paddingRight: '10px' }} />{asset.name}</span>,
            key: asset.id,
            children: []
        };
        tree.push(treeData);
        _proto_.getCascadingTreeView(assetData,asset.id,treeData.children);
    }
    return tree;
}

_proto_.validateDirList = (assetData,listToBeValidated) => {
    const rootDirList = assetData.filter(asset => !asset.parent_id);
    const rootDir = rootDirList.find(asset => asset.name.toLowerCase() === listToBeValidated[0].toLowerCase());
    if(rootDir){
        let folderId = rootDir.id;
        listToBeValidated.shift();
        for(const childName of listToBeValidated){
            const dirData = assetData.filter(asset => asset.parent_id === folderId);
            const matchedFolder = dirData.find(asset => asset.name.toLowerCase() === childName.toLowerCase());
            if(!matchedFolder) throw new Error('Invalid Command');
            folderId = matchedFolder.id;
        }
        return folderId;
    }else{
        throw new Error('Invalid Command');
    }
}

export default new FileManager();