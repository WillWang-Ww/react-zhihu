import { fromJS } from 'immutable'

const defaultState = fromJS({
    articleList: [{
        id: 1,
        title: '简书一年，我找到了一份好工作',
        content: '这是我的亲身经历，没有虚构，虽然它听起来不像真的。 2017年11月7日 星期二 晴 说起来很惭愧，在简书写了一年的文，至今，我还是原来的我，既... '
    },
    {
        id: 2,
        title: '简书一年，我找到了一份好工作',
        content: '这是我的亲身经历，没有虚构，虽然它听起来不像真的。 2017年11月7日 星期二 晴 说起来很惭愧，在简书写了一年的文，至今，我还是原来的我，既... '
    },
    {
        id: 3,
        title: '简书一年，我找到了一份好工作',
        content: '这是我的亲身经历，没有虚构，虽然它听起来不像真的。 2017年11月7日 星期二 晴 说起来很惭愧，在简书写了一年的文，至今，我还是原来的我，既... '
    },
    {
        id: 4,
        title: '简书一年，我找到了一份好工作',
        content: '这是我的亲身经历，没有虚构，虽然它听起来不像真的。 2017年11月7日 星期二 晴 说起来很惭愧，在简书写了一年的文，至今，我还是原来的我，既... '
    },
    {
        id: 5,
        title: '简书一年，我找到了一份好工作',
        content: '这是我的亲身经历，没有虚构，虽然它听起来不像真的。 2017年11月7日 星期二 晴 说起来很惭愧，在简书写了一年的文，至今，我还是原来的我，既... '
    }
    ],
    NavList: [{
        id: 1,
        imgUrl: '../../../statics/jianshuhuiyuan.png' ,
    },]
})

export default (state = defaultState , action) => {
    switch(action.type){
        
        default:
            return state
    }
}