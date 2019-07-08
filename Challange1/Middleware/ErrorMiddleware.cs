using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using System.Threading.Tasks;

namespace Challange1.Web.Controllers
{
    /// <summary>
    /// Provides handling and response of unhandled exceptions
    /// </summary>
    public class ErrorMiddleware
    {
        private readonly RequestDelegate _next;
        private readonly ILogger _logger;

        public ErrorMiddleware(RequestDelegate next, ILoggerFactory factory)
        {
            _next = next;
            _logger = factory.CreateLogger("errors");
        }

        /// <summary>
        /// Just basically runs the next piece of code with a try block around it and handles in case of any exceptions bubbling up here
        /// </summary>
        /// <param name="context">Context of the current HTTP pipeline</param>
        /// <returns></returns>
        public async Task Invoke(HttpContext context)
        {
            try
            {
                await _next.Invoke(context);
            }
            catch (System.Exception ex)
            {
                _logger.LogError(ex, ex.Message + "-" + ex.StackTrace);
                context.Response.StatusCode = 500;
            }
        }
    }
}