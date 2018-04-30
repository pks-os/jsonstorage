using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using Microsoft.Azure.Documents;
using Microsoft.Azure.Documents.Client;
using Newtonsoft.Json;

namespace JsonStorage.Core
{
  public class ItemRepository
  {
    private const string DatabaseName = "StorageDB";
    private const string CollectionName = "StorageCollection";
    private readonly DocumentClient client;

    public ItemRepository(string storageEndpointUri, string storagePrimaryKey)
    {
      this.client = new DocumentClient(new Uri(storageEndpointUri), storagePrimaryKey);
    }

    public async Task Insert(Item item)
    {
      item.Updated = DateTime.UtcNow;

      try
      {
        await this.client.ReadDocumentAsync(UriFactory.CreateDocumentUri(DatabaseName, CollectionName, item.Id)).ConfigureAwait(false);
        Console.WriteLine("Found {0}", item.Id);

        await this.client.ReplaceDocumentAsync(UriFactory.CreateDocumentUri(DatabaseName, CollectionName, item.Id), item).ConfigureAwait(false);
        Console.WriteLine("Replaced Family {0}", item);
      }
      catch (DocumentClientException de)
      {
        if (de.StatusCode == HttpStatusCode.NotFound)
        {
          item.Created = DateTime.UtcNow;

          await
            this.client.CreateDocumentAsync(UriFactory.CreateDocumentCollectionUri(DatabaseName, CollectionName), item).ConfigureAwait(false);
          Console.WriteLine("Created Item {0}", item.Id);
        }
        else
        {
          throw;
        }
      }
    }

    public List<Item> GetAll()
    {
      FeedOptions queryOptions = new FeedOptions {MaxItemCount = -1};

      IQueryable<Item> items = this.client.CreateDocumentQuery<Item>(
        UriFactory.CreateDocumentCollectionUri(DatabaseName, CollectionName), queryOptions);

      Console.WriteLine("Running LINQ query...");
      foreach (Item item in items)
      {
        Console.WriteLine("\tRead {0}", item);
      }

      Console.WriteLine("Press any key to continue ...");
      return items.ToList();
    }

    public async Task<Item> GetById(string id)
    {
      try
      {
        var response =
          await
            client.ReadDocumentAsync(UriFactory.CreateDocumentUri(DatabaseName, CollectionName, id))
              .ConfigureAwait(false);
        var item = JsonConvert.DeserializeObject<Item>(response.Resource.ToString());
        Console.WriteLine("Found {0}", item);
        return item;
      }
      catch
      {
        return null;
      }

    }

    // ADD THIS PART TO YOUR CODE
    public async Task DeleteById(string id)
    {
      try
      {
        await this.client.DeleteDocumentAsync(UriFactory.CreateDocumentUri(DatabaseName, CollectionName, id)).ConfigureAwait(false);
        Console.WriteLine("Deleted Item {0}", id);
      }
      catch (DocumentClientException de)
      {
        throw;
      }
    }
  }
}
