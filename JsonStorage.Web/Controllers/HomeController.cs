using System.Web.Mvc;

namespace JsonStorage.Web.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            Response.RedirectPermanent("https://www.jsonstorage.net/");

            return View();
        }
    }
}