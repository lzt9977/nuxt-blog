import mongoose from 'mongoose'
const model = {
  // 文章标题
  title: {
    type: String,
    index: {
      unique: true,
    },
  },
  // // 文章id
  // articleId: {
  //   type: Number,
  //   index: {
  //     unique: true,
  //   },
  // },
  // 内容
  content: {
    type: String,
  },
  // 标签
  tag: {
    type: String,
    index: true,
    default: 'js'
  },
  // 分类
  category: {
    type: String,
    index: true,
    default: 'js'
  },
  // 创建时间
  createTime: {
    type: String,
  },
  // 作者
  author: {
    type: String,
  },
  // 文章浏览量
  pv: {
    type: Number,
    default: 0
  },
  // 发布文章的用户id
  uid: {
    type: Number,
    index: true,
  },
  // 更新时间
  updateTime: {
    type: String,
    default: Date.now()
  },
  // 状态
  status: {
    type: String,
    //pending 待审核 pass 通过
    default: 'pending'
  }
}

export default mongoose.model('Articles', model)