import { NavLink } from 'next/link';
import { 
  DashboardIcon, 
  ChatBubbleLeftIcon, 
  FilmIcon, 
  LightbulbIcon, 
  FileTextIcon, 
  FileSignatureIcon, 
  UsersIcon, 
  CalendarIcon, 
  BriefcaseIcon, 
  TrendingUpIcon,
  SettingsIcon,
  BellIcon
} from 'lucide-react';

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700">
      <div className="flex items-center px-4 py-6 border-b border-gray-200 dark:border-gray-700">
        <img 
          src="/logo.svg" 
          alt="PyramidOS" 
          className="h-8 w-auto"
        />
      </div>
      <nav className="mt-6 space-y-1">
        <NavLink 
          href="/dashboard" 
          className="flex items-center px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 dark:text-gray-300"
          activeClassName="bg-primary-50 text-primary-600 dark:bg-primary-900/20 dark:text-primary-400"
        >
          <DashboardIcon className="h-4 w-4 mr-3" />
          Dashboard
        </NavLink>
        
        <NavLink 
          href="/assistente" 
          className="flex items-center px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 dark:text-gray-300"
          activeClassName="bg-primary-50 text-primary-600 dark:bg-primary-900/20 dark:text-primary-400"
        >
          <ChatBubbleLeftIcon className="h-4 w-4 mr-3" />
          Assistente IA
        </NavLink>
        
        <NavLink 
          href="/ia-roteiros" 
          className="flex items-center px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 dark:text-gray-300"
          activeClassName="bg-primary-50 text-primary-600 dark:bg-primary-900/20 dark:text-primary-400"
        >
          <FilmIcon className="h-4 w-4 mr-3" />
          Roteiros
        </NavLink>
        
        <NavLink 
          href="/ia-ideias" 
          className="flex items-center px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 dark:text-gray-300"
          activeClassName="bg-primary-50 text-primary-600 dark:bg-primary-900/20 dark:text-primary-400"
        >
          <LightbulbIcon className="h-4 w-4 mr-3" />
          Ideias
        </NavLink>
        
        <NavLink 
          href="/propostas" 
          className="flex items-center px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 dark:text-gray-300"
          activeClassName="bg-primary-50 text-primary-600 dark:bg-primary-900/20 dark:text-primary-400"
        >
          <FileTextIcon className="h-4 w-4 mr-3" />
          Propostas
        </NavLink>
        
        <NavLink 
          href="/contratos" 
          className="flex items-center px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 dark:text-gray-300"
          activeClassName="bg-primary-50 text-primary-600 dark:bg-primary-900/20 dark:text-primary-400"
        >
          <FileSignatureIcon className="h-4 w-4 mr-3" />
          Contratos
        </NavLink>
        
        <NavLink 
          href="/crm" 
          className="flex items-center px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 dark:text-gray-300"
          activeClassName="bg-primary-50 text-primary-600 dark:bg-primary-900/20 dark:text-primary-400"
        >
          <UsersIcon className="h-4 w-4 mr-3" />
          CRM
        </NavLink>
        
        <NavLink 
          href="/calendario" 
          className="flex items-center px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 dark:text-gray-300"
          activeClassName="bg-primary-50 text-primary-600 dark:bg-primary-900/20 dark:text-primary-400"
        >
          <CalendarIcon className="h-4 w-4 mr-3" />
          Calendário
        </NavLink>
        
        <NavLink 
          href="/projetos" 
          className="flex items-center px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 dark:text-gray-300"
          activeClassName="bg-primary-50 text-primary-600 dark:bg-primary-900/20 dark:text-primary-400"
        >
          <BriefcaseIcon className="h-4 w-4 mr-3" />
          Projetos
        </NavLink>
        
        <NavLink 
          href="/financeiro" 
          className="flex items-center px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 dark:text-gray-300"
          activeClassName="bg-primary-50 text-primary-600 dark:bg-primary-900/20 dark:text-primary-400"
        >
          <TrendingUpIcon className="h-4 w-4 mr-3" />
          Financeiro
        </NavLink>
        
        <NavLink 
          href="/configuracoes" 
          className="mt-auto flex items-center px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 dark:text-gray-300"
          activeClassName="bg-primary-50 text-primary-600 dark:bg-primary-900/20 dark:text-primary-400"
        >
          <SettingsIcon className="h-4 w-4 mr-3" />
          Configurações
        </NavLink>
      </nav>
      <div className="mt-6 flex items-center px-4 pt-4 border-t border-gray-200 dark:border-gray-700">
        <div className="relative">
          <img 
            src="/avatar-placeholder.jpg" 
            alt="Carlos" 
            className="h-10 w-10 rounded-full object-cover border-2 border-white dark:border-gray-800"
          />
          <span className="absolute bottom-0 right-0 h-2 w-2 bg-green-500 rounded-full border-2 border-white dark:border-gray-800"></span>
        </div>
        <div className="ml-3">
          <p className="text-sm font-medium text-gray-800 dark:text-gray-100">Carlos</p>
          <p className="text-xs text-gray-500 dark:text-gray-400">videomaker@email.com</p>
        </div>
      </div>
    </aside>
  );
}
