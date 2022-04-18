using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Movement : MonoBehaviour
{



  // Start is called before the first frame update
  private Rigidbody2D rb;
  public float moveSpeed = 100f;
  void Start()
  {
    rb = GetComponent<Rigidbody2D>();
  }

  // Update is called once per frame
  void Update()
  {

    Vector2 inputVector = Vector2.zero;
    if (Input.GetMouseButton(0))
    {
      //mouse input
      Vector2 delta = Input.mousePosition - (Camera.main.WorldToScreenPoint(this.transform.position));
      inputVector = delta.normalized;
    }
    else if (Input.touchCount > 0)
    {
      //touch input
      Vector2 delta = Input.GetTouch(0).position - (Vector2)Camera.main.WorldToScreenPoint(this.transform.position);
      inputVector = delta.normalized;
    }
    else
    {
      //collect keyboard input
      if (Input.GetKey(KeyCode.DownArrow))
      {
        inputVector.y = -1;
      }
      if (Input.GetKey(KeyCode.RightArrow))
      {
        inputVector.x = 1;
      }
      if (Input.GetKey(KeyCode.UpArrow))
      {
        inputVector.y = 1;
      }
      if (Input.GetKey(KeyCode.LeftArrow))
      {
        inputVector.x = -1;
      }
      inputVector = inputVector.normalized;
    }

    this.rb.MovePosition((Vector2)(this.transform.position) + moveSpeed * Time.deltaTime * inputVector);
  }
}
