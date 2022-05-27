import React from 'react'

class ErrorBoundary extends React.Component {
    componentDidCatch(error:any, errorInfo:any) {

        console.log("捕获到异常-React组件错误：error",error,'----errorInfo---',errorInfo)
        // 可以将错误日志上报给服务器

    }
    componentDidMount() {
        // 自身抛出的错误（并非它的子组件）
        // selfError.error
    }

    render() {
        return this.props.children;
    }
}

export default ErrorBoundary
//
