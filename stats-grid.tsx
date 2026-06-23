import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

interface StatsCardProps {
  title: string;
  value: string;
  trend?: string;
  icon: keyof typeof import('lucide-react').default;
  color?: 'primary' | 'success' | 'warning' | 'info';
  isProgressBar?: boolean;
  progressValue?: number;
}

export function StatsGrid({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {children}
    </div>
  );
}

export function StatsCard({ 
  title, 
  value, 
  trend, 
  icon: Icon, 
  color = 'primary',
  isProgressBar = false,
  progressValue = 0
}: StatsCardProps) {
  const colorMap: Record<string, string> = {
    primary: 'primary-500',
    success: 'success',
    warning: 'warning',
    info: 'info'
  };

  return (
    <Card className="border">
      <CardHeader className="flex flex-col space-y-2">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">{title}</h3>
          <Icon className={`h-5 w-5 text-${colorMap[color]}`} />
        </div>
        <p className="text-2xl font-bold text-gray-800 dark:text-gray-100">{value}</p>
        {trend && <p className={trend.startsWith('+') ? 
          `text-sm text-success` : 
          `text-sm text-error`}>{trend}</p>}
      </CardHeader>
      {isProgressBar && (
        <CardContent className="pt-0">
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
            <div 
              className={`bg-${colorMap[color]} h-2.5 rounded-full`} 
              style={{ width: `${progressValue}%` }}
            ></div>
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{progressValue}% utilizado</p>
        </CardContent>
      )}
    </Card>
  );
}
