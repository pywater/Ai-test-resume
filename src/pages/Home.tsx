import React from 'react';
import { 
  Menu, 
  Sun, 
  Moon, 
  User, 
  Briefcase, 
  Mail, 
  Github, 
  Linkedin, 
  Twitter 
} from 'lucide-react';

const Home: React.FC = () => {
  // 模拟个人信息数据
  const personalInfo = {
    name: "张明",
    title: "高级前端开发者",
    bio: "专注于创建优雅、高效的用户界面和体验，热衷于学习和探索新技术。",
    skills: ["React", "TypeScript", "Tailwind CSS", "Node.js", "UI/UX设计"],
    projects: [
      {
        id: 1,
        title: "电商平台重构",
        description: "使用React和TypeScript重构了传统电商平台，提升了用户体验和性能",
        image: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=E-commerce%20website%20interface%20design&sign=5874ffa96d7d06a3e918658e575ba9cf"
      },
      {
        id: 2,
        title: "数据分析仪表板",
        description: "开发了响应式数据可视化仪表板，帮助用户实时监控业务指标",
        image: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Data%20analysis%20dashboard%20interface&sign=923791e94475b61844ef0ce268a667b5"
      },
      {
        id: 3,
        title: "移动应用前端",
        description: "为健康追踪应用构建了跨平台前端，支持iOS和Android",
        image: "https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Mobile%20app%20frontend%20design&sign=5c4a1db0a3c3efa8939057102c8c88b1"
      }
    ],
    contact: {
      email: "zhangming@example.com",
      github: "github.com/zhangming",
      linkedin: "linkedin.com/in/zhangming",
      twitter: "twitter.com/zhangming"
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-200">
      {/* 导航栏 */}
      <nav className="sticky top-0 z-50 backdrop-blur-lg bg-white/80 dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-xl font-bold text-blue-600 dark:text-blue-400">
            <i className="fa-solid fa-code mr-2"></i>
            张明的个人主页
          </div>
          
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">关于我</a>
            <a href="#skills" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">技能</a>
            <a href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">项目</a>
            <a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">联系我</a>
          </div>
          
          <div className="flex items-center space-x-4">
            <button 
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
              aria-label="切换主题"
            >
              <Moon className="h-5 w-5" />
            </button>
            
            <button 
              className="md:hidden p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
              aria-label="菜单"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </nav>

      <main>
        {/* 英雄区域 */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-5xl">
            <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-lg">
                <img 
                  src="https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Professional%20portrait%20of%20a%20software%20developer&sign=85dad374aa53fbfd05fbee8d688b6540" 
                  alt="张明的照片" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="text-center md:text-left">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                  {personalInfo.name}
                </h1>
                <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-6">
                  {personalInfo.title}
                </h2>
                <p className="text-lg mb-8 max-w-2xl">
                  {personalInfo.bio}
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-4">
                  <a 
                    href="#contact" 
                    className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors shadow-md hover:shadow-lg flex items-center gap-2"
                  >
                    <Mail className="h-5 w-5" />
                    联系我
                  </a>
                  <a 
                    href="#projects" 
                    className="px-6 py-3 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg border border-gray-300 dark:border-gray-700 transition-colors shadow-sm hover:shadow flex items-center gap-2"
                  >
                    <Briefcase className="h-5 w-5" />
                    查看项目
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 技能区域 */}
        <section id="skills" className="py-16 px-4 bg-white dark:bg-gray-900">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl font-bold mb-12 text-center">我的技能</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
              {personalInfo.skills.map((skill, index) => (
                <div 
                  key={index}
                  className="py-6 px-4 bg-gray-50 dark:bg-gray-800 rounded-xl text-center shadow-sm hover:shadow-md transition-shadow"
                >
                  <span className="font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 项目区域 */}
        <section id="projects" className="py-16 px-4">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl font-bold mb-12 text-center">我的项目</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {personalInfo.projects.map((project) => (
                <div 
                  key={project.id}
                  className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all hover:-translate-y-1"
                >
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                    <a 
                      href="#" 
                      className="inline-block text-blue-600 dark:text-blue-400 hover:underline font-medium"
                    >
                      查看详情
                      <i className="fa-solid fa-arrow-right ml-1"></i>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 联系区域 */}
        <section id="contact" className="py-16 px-4 bg-white dark:bg-gray-900">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl font-bold mb-12 text-center">联系我</h2>
            <div className="max-w-md mx-auto">
              <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-sm">
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">姓名</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-400"
                      placeholder="您的姓名"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">邮箱</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-400"
                      placeholder="您的邮箱"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">留言</label>
                    <textarea 
                      id="message" 
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-400"
                      placeholder="请输入您的留言内容"
                    ></textarea>
                  </div>
                  <button 
                    type="submit"
                    className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors shadow-md hover:shadow-lg"
                  >
                    发送消息
                  </button>
                </form>
                
                <div className="mt-10 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <h3 className="text-lg font-medium mb-4">其他联系方式</h3>
                  <div className="flex justify-center gap-6">
                    <a href={`mailto:${personalInfo.contact.email}`} className="p-3 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors text-gray-700 dark:text-gray-300">
                      <Mail className="h-5 w-5" />
                    </a>
                    <a href={`https://${personalInfo.contact.github}`} className="p-3 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors text-gray-700 dark:text-gray-300">
                      <Github className="h-5 w-5" />
                    </a>
                    <a href={`https://${personalInfo.contact.linkedin}`} className="p-3 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors text-gray-700 dark:text-gray-300">
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a href={`https://${personalInfo.contact.twitter}`} className="p-3 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors text-gray-700 dark:text-gray-300">
                      <Twitter className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 页脚 */}
      <footer className="bg-gray-900 text-white py-10 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="text-xl font-bold text-blue-400 mb-2">
                <i className="fa-solid fa-code mr-2"></i>
                张明的个人主页
              </div>
              <p className="text-gray-400 text-sm">
                高级前端开发者 | 热衷于创建优雅、高效的用户界面和体验
              </p>
            </div>
            
            <div className="flex flex-col items-center md:items-end">
              <p className="text-gray-400 text-sm mb-4">
                © {new Date().getFullYear()} 张明. 保留所有权利.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <i className="fa-solid fa-user mr-1"></i> 关于
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <i className="fa-solid fa-file-alt mr-1"></i> 隐私政策
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;