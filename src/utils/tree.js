
// @param originData
// @param rooId: 최상위 키
// @param parentIdKey: 부모 아이디를 알기위한 오브젝트 키
// @param idKey: 현재 아이디를 알기위한 오브젝트 키
// @param folderTypeKey:  폴더 구분을 알기위한 폴더 구분 키
// @param titleKey: 타이틀 구분을 위한 타이틀 구분 키
// @returns {{rootId: Number, itmes: *}|{rootId:}}


export const getTreeData = (
    originData = [],
    rootId = 0,
    parentIdKey,
    idKey,
    folderTypeKey,
    titleKey,
) => {
    try {
        const items = originData.reduce(
            (acc, cur) => {
                if (acc[cur[parentIdKey]] && acc[cur[parentIdKey]].toString()) {
                    return {
                        ...acc,
                        [cur[parentIdKey]]: {
                            ...acc[cur[parentIdKey]],
                            children: [...acc[cur[parentIdKey]].children, cur[idKey]],
                            hasChildren: true,
                            isFolder: true,
                        },
                        [cur[idKey]]: {
                            id: cur[idKey],
                            children: [],
                            hasChildren: false,
                            isExpanded: cur.isExpanded || false,
                            isChildrenLoading: false,
                            isFolder: cur[folderTypeKey],
                            lvl:
                            cur[parentIdKey] <= rootId ? 1 : acc[cur[parentIdKey]].lvl +1,
                            data: {
                                ...cur,
                                title: cur[titleKey] || cur.NAME_KOR,
                            },
                        },
                    };
                }
                return {
                    ...acc,
                    [cur[idKey]]: {
                        id: cur[idKey],
                        children: [],
                        hasChildren: false,
                        isExpanded: cur.isExpanded || false,
                        isChildrenLoading: false,
                        isFolder: cur[folderTypeKey],
                        lvl: 1,
                        data: {
                            ...cur,
                            title: cur[titleKey] || cur.NAME_KOR,
                        },
                    },                    
                };
            },
            {
                [rootId]: {
                    id: rootId,
                    children: [],
                    hasChildren: false,
                    isExpanded: false,
                    isChildrenLoading: false,
                    isFolder: true,
                    data: {
                        title: 'root',
                    },
                },
            },
        );

        return {
            rootId,
            items,
        };        
    } catch (error) {
        return {rootId};
    }
};