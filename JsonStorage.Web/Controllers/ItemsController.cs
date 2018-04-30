using System;
using System.Collections.Generic;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using System.Web.Configuration;
using System.Web.Http;
using System.Web.Http.Cors;
using JsonStorage.Core;

namespace JsonStorage.Web.Controllers
{
  [EnableCors(origins: "*", headers: "*", methods: "*")]
  public class ItemsController : ApiController
  {
    private static readonly ItemRepository storage = new ItemRepository(
      WebConfigurationManager.AppSettings["StorageEndpointUri"],
      WebConfigurationManager.AppSettings["StoragePrimaryKey"]);

    // GET api/items
    public IEnumerable<Item> Get()
    {
      var query = Request.GetQueryNameValuePairs();
      return new List<Item>();
    }

    // GET api/items/5
    public async Task<HttpResponseMessage> Get(string id)
    {
      HttpResponseMessage response;
      var item = await storage.GetById(id);
      if (item != null)
      {
        response = this.Request.CreateResponse(HttpStatusCode.OK);
        response.Content = new StringContent(item.Value, Encoding.UTF8, 
          "application/json");
      }
      else
      {
        response = this.Request.CreateResponse(HttpStatusCode.NotFound);
      }

      return response;
    }

    // POST api/items
    public async Task<HttpResponseMessage> Post([FromBody]dynamic data)
    {
      var id = Guid.NewGuid().ToString();
      var item = new Item()
      {
        Id = id,
        Value = data.ToString()
      };

      await storage.Insert(item);

      HttpResponseMessage response = this.Request.CreateResponse
        (HttpStatusCode.Created);
      response.Content = new StringContent(
        $"{{\"uri\":\"https://jsonstorage.net/api/items/{id}\"}}",
        Encoding.UTF8, "application/json");
      return response;
    }

    // PUT api/items/5
    public async Task<HttpResponseMessage> Put(string id, [FromBody]dynamic data)
    {
      var item = new Item()
      {
        Id = id,
        Value = data.ToString()
      };

      await storage.Insert(item);

      HttpResponseMessage response = this.Request.CreateResponse(HttpStatusCode.Created);
      response.Content = new StringContent(
        $"{{\"uri\":\"https://jsonstorage.net/api/items/{id}\"}}",
        Encoding.UTF8, "application/json");
      return response;
    }

    // DELETE api/items/5
    public async Task<HttpResponseMessage> Delete(string id)
    {
      await storage.DeleteById(id);
      HttpResponseMessage response = this.Request.CreateResponse(HttpStatusCode.Accepted);
      return response;
    }
  }
}