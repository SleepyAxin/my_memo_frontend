/**
 * 登录表单值接口
 * @interface LoginFormValues
 * @property { string } username - 用户名
 * @property { string } password - 密码
 * @property { boolean } remember_me - 是否记住登录状态
 */
export interface LoginFormValues 
{
    username: string
    password: string
    remember_me: boolean
}

/**
 * 注册表单值接口
 * @interface RegisterFormValues
 * @property { string } username - 用户名
 * @property { string } password - 密码
 * @property { string } password_confirm - 确认密码
 * @property { boolean } terms - 是否同意条款
 */
export interface RegisterFormValues 
{
    username: string
    password: string
    password_confirm: string
    terms: boolean
}

/**
 * 用户信息接口
 * @interface UserInfo
 * @property { string } username - 用户名
 */
export interface UserInfo 
{
    username: string
}

/**
 * 认证响应接口
 * @interface AuthResponse
 * @property { string } token - 认证令牌
 * @property { UserInfo } user - 用户信息
 */
export interface AuthResponse 
{
    token: string
    user: UserInfo
}

/**
 * API 错误接口
 * @interface ApiError
 * @property { string } code - 错误代码
 * @property { string } message - 错误消息
 */
export interface ApiError 
{
    code: string
    message: string
}